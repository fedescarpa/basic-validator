/* jshint node: true, mocha: true */
'use strict';

var should = require('should');

var Validator = require('../.').BooleanValidator;

describe('Bool Validator', function () {

  context('#is', function () {

    it('#isNull', function () {

      Validator.isNull(null).should.be.eql(true);

      Validator.isNull(0).should.be.eql(false);
      Validator.isNull('').should.be.eql(false);
      Validator.isNull(NaN).should.be.eql(false);
      Validator.isNull(false).should.be.eql(false);
      Validator.isNull(undefined).should.be.eql(false);

    });

    it('#isUndefined', function () {

      Validator.isUndefined(undefined).should.be.eql(true);

      Validator.isUndefined(0).should.be.eql(false);
      Validator.isUndefined('').should.be.eql(false);
      Validator.isUndefined(NaN).should.be.eql(false);
      Validator.isUndefined(null).should.be.eql(false);
      Validator.isUndefined(false).should.be.eql(false);

    });

    it('#isNaN', function () {

      Validator.isNaN(NaN).should.be.eql(true);

      Validator.isNaN(0).should.be.eql(false);
      Validator.isNaN('').should.be.eql(false);
      Validator.isNaN(null).should.be.eql(false);
      Validator.isNaN(false).should.be.eql(false);
      Validator.isNaN(undefined).should.be.eql(false);

    });

    it('#isNullable', function () {

      Validator.isNullable(NaN).should.be.eql(true);
      Validator.isNullable(null).should.be.eql(true);
      Validator.isNullable(undefined).should.be.eql(true);

      Validator.isNullable(0).should.be.eql(false);
      Validator.isNullable('').should.be.eql(false);
      Validator.isNullable(false).should.be.eql(false);

    });

    it('#isBoolean', function () {

      Validator.isBoolean(true).should.be.eql(true);
      Validator.isBoolean(false).should.be.eql(true);

      Validator.isBoolean(0).should.be.eql(false);
      Validator.isBoolean({}).should.be.eql(false);
      Validator.isBoolean([]).should.be.eql(false);
      Validator.isBoolean('true').should.be.eql(false);

    });

    it('#isNumber', function () {

      Validator.isNumber(0).should.be.eql(true);
      Validator.isNumber(123).should.be.eql(true);

      Validator.isNumber({}).should.be.eql(false);
      Validator.isNumber([]).should.be.eql(false);
      Validator.isNumber('1').should.be.eql(false);
      Validator.isNumber(true).should.be.eql(false);

    });

    it('#isString', function () {

      Validator.isString('').should.be.eql(true);
      Validator.isString('hola').should.be.eql(true);

      Validator.isString({}).should.be.eql(false);
      Validator.isString([]).should.be.eql(false);
      Validator.isString(123).should.be.eql(false);
      Validator.isString(true).should.be.eql(false);

    });

    it('#isObject', function () {

      Validator.isObject({}).should.be.eql(true);
      Validator.isObject([]).should.be.eql(true);
      Validator.isObject(new Date()).should.be.eql(true);

      Validator.isObject('').should.be.eql(false);
      Validator.isObject(123).should.be.eql(false);
      Validator.isObject(null).should.be.eql(false);
      Validator.isObject(false).should.be.eql(false);

    });

    it('#isArray', function () {

      Validator.isArray([]).should.be.eql(true);

      Validator.isArray('').should.be.eql(false);
      Validator.isArray({}).should.be.eql(false);
      Validator.isArray(123).should.be.eql(false);
      Validator.isArray(null).should.be.eql(false);
      Validator.isArray(false).should.be.eql(false);

    });

    it('#isEmail', function () {

      Validator.isEmail('foo._%-+bar@gmail.com').should.be.eql(true);

      Validator.isEmail('foo._%-+/bar@.com').should.be.eql(false);
      Validator.isEmail('foo._%-+/bargmail.com').should.be.eql(false);
      Validator.isEmail('foo._%-+/bar@gmail.com').should.be.eql(false);

    });

    it('#isEmpty', function () {

      Validator.isEmpty({}).should.be.eql(true);
      Validator.isEmpty([]).should.be.eql(true);
      Validator.isEmpty('').should.be.eql(true);
      Validator.isEmpty('  \t\n\r  ').should.be.eql(true);

      Validator.isEmpty(123).should.be.eql(false);
      Validator.isEmpty(null).should.be.eql(false);
      Validator.isEmpty(true).should.be.eql(false);
      Validator.isEmpty('foo').should.be.eql(false);
      Validator.isEmpty({foo:'bar'}).should.be.eql(false);

    });

  });

  context('#not', function () {

    it('#notNull', function () {

      Validator.notNull(null).should.be.eql(false);

      Validator.notNull(0).should.be.eql(true);
      Validator.notNull('').should.be.eql(true);
      Validator.notNull(NaN).should.be.eql(true);
      Validator.notNull(true).should.be.eql(true);
      Validator.notNull(undefined).should.be.eql(true);

    });

    it('#notUndefined', function () {

      Validator.notUndefined(undefined).should.be.eql(false);

      Validator.notUndefined(0).should.be.eql(true);
      Validator.notUndefined('').should.be.eql(true);
      Validator.notUndefined(NaN).should.be.eql(true);
      Validator.notUndefined(null).should.be.eql(true);
      Validator.notUndefined(true).should.be.eql(true);

    });

    it('#notNaN', function () {

      Validator.notNaN(NaN).should.be.eql(false);

      Validator.notNaN(0).should.be.eql(true);
      Validator.notNaN('').should.be.eql(true);
      Validator.notNaN(null).should.be.eql(true);
      Validator.notNaN(true).should.be.eql(true);
      Validator.notNaN(undefined).should.be.eql(true);

    });

    it('#notNullable', function () {

      Validator.notNullable(NaN).should.be.eql(false);
      Validator.notNullable(null).should.be.eql(false);
      Validator.notNullable(undefined).should.be.eql(false);

      Validator.notNullable(0).should.be.eql(true);
      Validator.notNullable('').should.be.eql(true);
      Validator.notNullable(true).should.be.eql(true);

    });

    it('#notBoolean', function () {

      Validator.notBoolean(false).should.be.eql(false);
      Validator.notBoolean(true).should.be.eql(false);

      Validator.notBoolean(0).should.be.eql(true);
      Validator.notBoolean({}).should.be.eql(true);
      Validator.notBoolean([]).should.be.eql(true);
      Validator.notBoolean('false').should.be.eql(true);

    });

    it('#notNumber', function () {

      Validator.notNumber(0).should.be.eql(false);
      Validator.notNumber(123).should.be.eql(false);

      Validator.notNumber({}).should.be.eql(true);
      Validator.notNumber([]).should.be.eql(true);
      Validator.notNumber('1').should.be.eql(true);
      Validator.notNumber(false).should.be.eql(true);

    });

    it('#notString', function () {

      Validator.notString('').should.be.eql(false);
      Validator.notString('hola').should.be.eql(false);

      Validator.notString({}).should.be.eql(true);
      Validator.notString([]).should.be.eql(true);
      Validator.notString(123).should.be.eql(true);
      Validator.notString(false).should.be.eql(true);

    });

    it('#notObject', function () {

      Validator.notObject({}).should.be.eql(false);
      Validator.notObject([]).should.be.eql(false);
      Validator.notObject(new Date()).should.be.eql(false);

      Validator.notObject('').should.be.eql(true);
      Validator.notObject(123).should.be.eql(true);
      Validator.notObject(null).should.be.eql(true);
      Validator.notObject(true).should.be.eql(true);

    });

    it('#notArray', function () {

      Validator.notArray([]).should.be.eql(false);

      Validator.notArray('').should.be.eql(true);
      Validator.notArray({}).should.be.eql(true);
      Validator.notArray(123).should.be.eql(true);
      Validator.notArray(null).should.be.eql(true);
      Validator.notArray(true).should.be.eql(true);

    });

    it('#notEmail', function () {

      Validator.notEmail('foo._%-+bar@gmail.com').should.be.eql(false);

      Validator.notEmail('foo._%-+/bar@.com').should.be.eql(true);
      Validator.notEmail('foo._%-+/bargmail.com').should.be.eql(true);
      Validator.notEmail('foo._%-+/bar@gmail.com').should.be.eql(true);

    });

    it('#notEmpty', function () {

      Validator.notEmpty({}).should.be.eql(false);
      Validator.notEmpty([]).should.be.eql(false);
      Validator.notEmpty('').should.be.eql(false);
      Validator.notEmpty('  \t\n\r  ').should.be.eql(false);

      Validator.notEmpty(123).should.be.eql(true);
      Validator.notEmpty(null).should.be.eql(true);
      Validator.notEmpty(false).should.be.eql(true);
      Validator.notEmpty('foo').should.be.eql(true);
      Validator.notEmpty({foo:'bar'}).should.be.eql(true);

    });

  });

});
