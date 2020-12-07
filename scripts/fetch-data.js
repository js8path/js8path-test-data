/*
  fetch data from pskreporter and save as JSON in module

  usage:
    before running
      `yarn add --dev @js8path\js8path-pskreporter`
      (do not push package.json back to repo without removing  this)
    add this to package.json scripts
      "fetch": "babel-node ./scripts/fetch-data.js"
    then run with
      yarn run fetch

  Before running: `yarn add --dev @js8path\pskreporter`
 */

// FixMe: use yargs to make this more full featured cli, combined with retrieve-file.js

let dataOutputFile = './src/test-data.json'
let fs = require('fs')
require('axios')

import js8pathPskreporter from '@js8path/js8path-pskreporter'

let dataForModule = {}

let pskReporterQuery = {
  flowStartSeconds: -2400 // 40 minutes (default is 30 minutes)
}
console.log('js8pathPskreporter.net.queryRawXml ' + JSON.stringify(pskReporterQuery, null, 2))
console.log('begin query rawXml from net')
js8pathPskreporter.net.queryRawXml(pskReporterQuery).then(function (rawXml) {
  console.log('end query rawXml from net')
  // console.log(rawXml)
  dataForModule.rawXml = rawXml
  console.log('begin convert XML to reporter app data')
  return js8pathPskreporter.transform.parseAndXfm(
    rawXml,
    false // was getting validation errors with xml data from from net
  )
}).then(function (reporterAppData) {
  console.log('end convert XML to reporter app data')
  // console.log(reporterAppData)
  dataForModule.reporterAppData = reporterAppData
  console.log('begin convert reporter app data to js8path data')
  return js8pathPskreporter.transform.xfmAppDataToJs8pathData(
    reporterAppData,
    false, // set these to false because of missing freq in record 798
    false
  )
}).then(function (js8pathData) {
  console.log('end  convert reporter app data to js8path data')
  // console.log(js8pathData)
  dataForModule.js8pathData = js8pathData
  console.log('writing module data file')
  fs.writeFileSync(
    dataOutputFile,
    JSON.stringify(dataForModule, null, 2)
  )
  console.log('done')
}).catch(function (err) {
  console.log('error: ' + JSON.stringify(err, null, 2))
  throw err
})
