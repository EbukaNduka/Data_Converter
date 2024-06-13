# Data Conversion CLI Tool

A command-line tool for converting between various data formats: CSV, JSON, XML, and YAML.

## Installation

Ensure you have Node.js installed on your machine. Then, clone this repository and install dependencies using npm:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Usage

### Commands

#### 1. Convert CSV to JSON

```bash
./data-converter csvtojson <inputFile> <outputFile>
```

- **inputFile**: Path to the CSV file you want to convert.
- **outputFile**: Path where the resulting JSON file should be saved.

Example:
```bash
./data-converter csvtojson input.csv output.json
```

#### 2. Convert XML to YAML

```bash
./data-converter xmltoyaml <inputFile> <outputFile>
```

- **inputFile**: Path to the XML file you want to convert.
- **outputFile**: Path where the resulting YAML file should be saved.

Example:
```bash
./data-converter xmltoyaml input.xml output.yaml
```

#### 3. Convert JSON to CSV

```bash
./data-converter jsontocsv <inputFile> <outputFile>
```

- **inputFile**: Path to the JSON file you want to convert.
- **outputFile**: Path where the resulting CSV file should be saved.

Example:
```bash
./data-converter jsontocsv input.json output.csv
```

## Examples

### Convert CSV to JSON

```bash
./data-converter csvtojson data.csv result.json
```

### Convert XML to YAML

```bash
./data-converter xmltoyaml data.xml result.yaml
```

### Convert JSON to CSV

```bash
./data-converter jsontocsv data.json result.csv
```

## Dependencies

- `csvtojson`: For converting CSV to JSON.
- `xml2js`: For converting XML to JavaScript objects (used for YAML conversion).
- `js-yaml`: For converting JavaScript objects to YAML.
- `json2csv`: For converting JSON to CSV.



