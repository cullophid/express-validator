const ValidationError = module.exports = function (errors) {
  this.type = "Validation Error"
  this.message = errors
}

ValidationError.prototype = Error.prototype
