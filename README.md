# js8path-test-data
Test data matching schemas in @js8path/js8path-data

## Usage

### @js8path/js8path-test-data javascript module

Usage:

`import js8pathTestData from '@js8path/js8path-test-data'`
- js8pathTestData.rawXml: raw XML data from pskreporter
- js8pathTestData.reporterAppData: js8path-pskreporter "appData" decoded from rawXml
- js8pathTestData.js8pathData: js8path-data reports

## Development

### development process

Prepare package for development with
  `yarn install`

Fetch and compile test data source with 
  `yarn run fetch`

Run unit tests and coverage once 
  `yarn run test`

Build distribution files 
  `yarn run build`

Start continuous testing with: 
  `yarn run dev`

This will open a web-browser screen with unit test results. 
The tests are re-run every time that changed source code is saved. 

## License

MIT, ©2019, Correspondence Technologies, LLC
