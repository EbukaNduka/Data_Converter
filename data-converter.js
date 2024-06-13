#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const csvtojson = require('csvtojson');
const { parseStringPromise } = require('xml2js');
const yaml = require('js-yaml');
const { parse } = require('json2csv');

program.version('1.0.0').description('Data Conversion CLI Tool');

// Convert CSV to JSON
program
  .command('csvtojson <inputFile> <outputFile>')
  .description('Convert CSV to JSON')
  .action((inputFile, outputFile) => {
    csvtojson()
      .fromFile(inputFile)
      .then((jsonObj) => {
        fs.writeFileSync(outputFile, JSON.stringify(jsonObj, null, 2), 'utf8');
        console.log(`Converted CSV to JSON and saved to ${outputFile}`);
      })
      .catch((err) => {
        console.error(`Error converting CSV to JSON: ${err.message}`);
      });
  });

// Convert XML to YAML
program
  .command('xmltoyaml <inputFile> <outputFile>')
  .description('Convert XML to YAML')
  .action((inputFile, outputFile) => {
    fs.readFile(inputFile, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading XML file: ${err.message}`);
        return;
      }
      parseStringPromise(data)
        .then((result) => {
          const yamlStr = yaml.dump(result);
          fs.writeFileSync(outputFile, yamlStr, 'utf8');
          console.log(`Converted XML to YAML and saved to ${outputFile}`);
        })
        .catch((err) => {
          console.error(`Error converting XML to YAML: ${err.message}`);
        });
    });
  });

// Convert JSON to CSV
program
  .command('jsontocsv <inputFile> <outputFile>')
  .description('Convert JSON to CSV')
  .action((inputFile, outputFile) => {
    fs.readFile(inputFile, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading JSON file: ${err.message}`);
        return;
      }
      try {
        const jsonObj = JSON.parse(data);
        const csv = parse(jsonObj);
        fs.writeFileSync(outputFile, csv, 'utf8');
        console.log(`Converted JSON to CSV and saved to ${outputFile}`);
      } catch (err) {
        console.error(`Error converting JSON to CSV: ${err.message}`);
      }
    });
  });

program.parse(process.argv);
