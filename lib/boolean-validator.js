/* jshint node: true */
'use strict';

var BooleanValidator = {

  isNull: function (value) {
    return value === null;
  },

  isUndefined: function (value) {
    return typeof value === 'undefined';
  },

  isNaN: function (value) {
    return typeof value === 'number' && value !== value; // remember: NaN === NaN => false
  },

  isNullable: function (value) {
    return ['isNull', 'isUndefined', 'isNaN'].some(function (validator) {
      return BooleanValidator[validator](value);
    });
  },

  isBoolean: function (value) {
    return typeof value === 'boolean';
  },

  isNumber: function (value) {
    return typeof value === 'number' && value === value; // remember: NaN === NaN => false
  },

  isString: function (value) {
    return typeof value === 'string';
  },

  isObject: function (value) {
    return typeof value === 'object' && value !== null;
  },

  isArray: function (value) {
    return typeof value === 'object' && value instanceof Array;
  },

  isEmail: function (value) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  },

  isEmpty: function (value) {
    return (BooleanValidator.isString(value) && value.trim() === '') ||
           (BooleanValidator.isArray(value)  && JSON.stringify(value) === '[]') ||
           (BooleanValidator.isObject(value) && JSON.stringify(value) === '{}');
  }

};

var not = function (key) {
  return function (value) {
    return !BooleanValidator[key](value);
  };
};

for (var key in BooleanValidator) {
  BooleanValidator[ 'not' + key.slice(2) ] = not(key);
}

module.exports = BooleanValidator;
