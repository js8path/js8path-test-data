/*
mocha tests for example data
test-example-data.js
*/

/* global describe, it */
import _isString from 'lodash/isString'
import _isObject from 'lodash/isObject'

import js8pathTestData from '../../src/main.js'

let chai = require('chai')
let assert = chai.assert

describe('example-data module', function () {
  let exampleData = js8pathTestData

  it('FixMe: needs tests', function () {
    assert.isOk(true)
  })

  describe('exampleData.rawXml', function () {
    it('is a string', function () {
      assert.isOk(_isString(exampleData.rawXml))
    })
    it('FixMe: is validated against schema', function () {
      assert.isOk(true)
    })
  })

  describe('exampleData.reporterAppData', function () {
    it('is an object', function () {
      assert.isOk(_isObject(exampleData.reporterAppData))
    })
    it('FixMe: is validated against schema', function () {
      assert.isOk(true)
    })
  })

  describe('exampleData.js8pathData', function () {
    it('is an object', function () {
      assert.isOk(_isObject(exampleData.js8pathData))
    })
    it('FixMe: is validated against schema', function () {
      assert.isOk(true)
    })
  })
})
