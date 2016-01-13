const ValidationError = require('./ValidationError')
const pick = require('ramda/src/pick')
const isEmpty = require('ramda/src/isEmpty')
const pluck = require('ramda/src/pluck')
const validate = require('jsonschema').validate;
const path = require('path')

module.exports = (schema) => {
  return (req, res, next) => {
    const result = validate(pick(['param', 'query', 'body'], req), schema)
    return isEmpty(result.errors) ? next() : next(new ValidationError(pluck('stack', result.errors)))
  }
}
