/* jshint node: true */
'use strict';

var BooleanValidator = require('./boolean-validator');
var ValidationError = require('./error');

var ErrorValidator = {};

var _makeError = function (key) {
  return function (value) {
    if ( !BooleanValidator[key](value) ) {
      throw new ValidationError('Validator.' + key + ' fail for value: ' + JSON.stringify(value));
    }
  };
};

for (var key in BooleanValidator) {
  ErrorValidator[key] = _makeError(key);
}

module.exports = ErrorValidator;
