/*
run all mocha unit tests for @js8path/js8path-test-data
test-ALL.js
*/

/* global describe */

// es6-promise polyfill needed for IE and other platforms without native ES6 Promise
import es6Promise from 'es6-promise'
es6Promise.polyfill()

describe('All js8path-test-data unit tests', function () {
  require('./test-example-data.js')
})
