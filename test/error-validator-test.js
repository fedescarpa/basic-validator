/* jshint node: true, mocha: true */
'use strict';

var should = require('should');

var Validator = require('../.').ErrorValidator;
var ValidationError = require('../.').Error;

describe('Error Validator', function () {

  context('#is', function () {

    it('#isNull', function () {

      Validator.isNull(null);

      Validator.isNull.bind(Validator, 0).should.throw(ValidationError);
      Validator.isNull.bind(Validator, '').should.throw(ValidationError);
      Validator.isNull.bind(Validator, NaN).should.throw(ValidationError);
      Validator.isNull.bind(Validator, false).should.throw(ValidationError);
      Validator.isNull.bind(Validator, undefined).should.throw(ValidationError);

    });

    it('#isUndefined', function () {

      Validator.isUndefined(undefined);

      Validator.isUndefined.bind(Validator, 0).should.throw(ValidationError);
      Validator.isUndefined.bind(Validator, '').should.throw(ValidationError);
      Validator.isUndefined.bind(Validator, NaN).should.throw(ValidationError);
      Validator.isUndefined.bind(Validator, null).should.throw(ValidationError);
      Validator.isUndefined.bind(Validator, false).should.throw(ValidationError);

    });

    it('#isNaN', function () {

      Validator.isNaN(NaN);

      Validator.isNaN.bind(Validator, 0).should.throw(ValidationError);
      Validator.isNaN.bind(Validator, '').should.throw(ValidationError);
      Validator.isNaN.bind(Validator, null).should.throw(ValidationError);
      Validator.isNaN.bind(Validator, false).should.throw(ValidationError);
      Validator.isNaN.bind(Validator, undefined).should.throw(ValidationError);

    });

    it('#isNullable', function () {

      Validator.isNullable(NaN);
      Validator.isNullable(null);
      Validator.isNullable(undefined);

      Validator.isNullable.bind(Validator, 0).should.throw(ValidationError);
      Validator.isNullable.bind(Validator, '').should.throw(ValidationError);
      Validator.isNullable.bind(Validator, false).should.throw(ValidationError);

    });

    it('#isBoolean', function () {

      Validator.isBoolean(true);
      Validator.isBoolean(false);

      Validator.isBoolean.bind(Validator, 0).should.throw(ValidationError);
      Validator.isBoolean.bind(Validator, {}).should.throw(ValidationError);
      Validator.isBoolean.bind(Validator, []).should.throw(ValidationError);
      Validator.isBoolean.bind(Validator, 'true').should.throw(ValidationError);

    });

    it('#isNumber', function () {

      Validator.isNumber(0);
      Validator.isNumber(123);

      Validator.isNumber.bind(Validator, {}).should.throw(ValidationError);
      Validator.isNumber.bind(Validator, []).should.throw(ValidationError);
      Validator.isNumber.bind(Validator, '1').should.throw(ValidationError);
      Validator.isNumber.bind(Validator, true).should.throw(ValidationError);

    });

    it('#isString', function () {

      Validator.isString('');
      Validator.isString('hola');

      Validator.isString.bind(Validator, {}).should.throw(ValidationError);
      Validator.isString.bind(Validator, []).should.throw(ValidationError);
      Validator.isString.bind(Validator, 123).should.throw(ValidationError);
      Validator.isString.bind(Validator, true).should.throw(ValidationError);

    });

    it('#isObject', function () {

      Validator.isObject({});
      Validator.isObject([]);
      Validator.isObject(new Date());

      Validator.isObject.bind(Validator, '').should.throw(ValidationError);
      Validator.isObject.bind(Validator, 123).should.throw(ValidationError);
      Validator.isObject.bind(Validator, null).should.throw(ValidationError);
      Validator.isObject.bind(Validator, false).should.throw(ValidationError);

    });

    it('#isArray', function () {

      Validator.isArray([]);

      Validator.isArray.bind(Validator, '').should.throw(ValidationError);
      Validator.isArray.bind(Validator, {}).should.throw(ValidationError);
      Validator.isArray.bind(Validator, 123).should.throw(ValidationError);
      Validator.isArray.bind(Validator, null).should.throw(ValidationError);
      Validator.isArray.bind(Validator, false).should.throw(ValidationError);

    });

    it('#isEmail', function () {

      Validator.isEmail('foo._%-+bar@gmail.com');

      Validator.isEmail.bind(Validator, 'foo._%-+/bar@.com').should.throw(ValidationError);
      Validator.isEmail.bind(Validator, 'foo._%-+/bargmail.com').should.throw(ValidationError);
      Validator.isEmail.bind(Validator, 'foo._%-+/bar@gmail.com').should.throw(ValidationError);

    });

    it('#isEmpty', function () {

      Validator.isEmpty({});
      Validator.isEmpty([]);
      Validator.isEmpty('');
      Validator.isEmpty('  \t\n\r  ');

      Validator.isEmpty.bind(Validator, 123).should.throw(ValidationError);
      Validator.isEmpty.bind(Validator, null).should.throw(ValidationError);
      Validator.isEmpty.bind(Validator, true).should.throw(ValidationError);
      Validator.isEmpty.bind(Validator, 'foo').should.throw(ValidationError);
      Validator.isEmpty.bind(Validator, {foo:'bar'}).should.throw(ValidationError);

    });

  });

  context('#not', function () {

    it('#notNull', function () {

      Validator.notNull.bind(Validator, null).should.throw(ValidationError);

      Validator.notNull(0);
      Validator.notNull('');
      Validator.notNull(NaN);
      Validator.notNull(true);
      Validator.notNull(undefined);

    });

    it('#notUndefined', function () {

      Validator.notUndefined.bind(Validator, undefined).should.throw(ValidationError);

      Validator.notUndefined(0);
      Validator.notUndefined('');
      Validator.notUndefined(NaN);
      Validator.notUndefined(null);
      Validator.notUndefined(true);

    });

    it('#notNaN', function () {

      Validator.notNaN.bind(Validator, NaN).should.throw(ValidationError);

      Validator.notNaN(0);
      Validator.notNaN('');
      Validator.notNaN(null);
      Validator.notNaN(true);
      Validator.notNaN(undefined);

    });

    it('#notNullable', function () {

      Validator.notNullable.bind(Validator, NaN).should.throw(ValidationError);
      Validator.notNullable.bind(Validator, null).should.throw(ValidationError);
      Validator.notNullable.bind(Validator, undefined).should.throw(ValidationError);

      Validator.notNullable(0);
      Validator.notNullable('');
      Validator.notNullable(true);

    });

    it('#notBoolean', function () {

      Validator.notBoolean.bind(Validator, false).should.throw(ValidationError);
      Validator.notBoolean.bind(Validator, true).should.throw(ValidationError);

      Validator.notBoolean(0);
      Validator.notBoolean({});
      Validator.notBoolean([]);
      Validator.notBoolean('false');

    });

    it('#notNumber', function () {

      Validator.notNumber.bind(Validator, 0).should.throw(ValidationError);
      Validator.notNumber.bind(Validator, 123).should.throw(ValidationError);

      Validator.notNumber({});
      Validator.notNumber([]);
      Validator.notNumber('1');
      Validator.notNumber(false);

    });

    it('#notString', function () {

      Validator.notString.bind(Validator, '').should.throw(ValidationError);
      Validator.notString.bind(Validator, 'hola').should.throw(ValidationError);

      Validator.notString({});
      Validator.notString([]);
      Validator.notString(123);
      Validator.notString(false);

    });

    it('#notObject', function () {

      Validator.notObject.bind(Validator, {}).should.throw(ValidationError);
      Validator.notObject.bind(Validator, []).should.throw(ValidationError);
      Validator.notObject.bind(Validator, new Date()).should.throw(ValidationError);

      Validator.notObject('');
      Validator.notObject(123);
      Validator.notObject(null);
      Validator.notObject(true);

    });

    it('#notArray', function () {

      Validator.notArray.bind(Validator, []).should.throw(ValidationError);

      Validator.notArray('');
      Validator.notArray({});
      Validator.notArray(123);
      Validator.notArray(null);
      Validator.notArray(true);

    });

    it('#notEmail', function () {

      Validator.notEmail.bind(Validator, 'foo._%-+bar@gmail.com').should.throw(ValidationError);

      Validator.notEmail('foo._%-+/bar@.com');
      Validator.notEmail('foo._%-+/bargmail.com');
      Validator.notEmail('foo._%-+/bar@gmail.com');

    });

    it('#notEmpty', function () {

      Validator.notEmpty.bind(Validator, {}).should.throw(ValidationError);
      Validator.notEmpty.bind(Validator, []).should.throw(ValidationError);
      Validator.notEmpty.bind(Validator, '').should.throw(ValidationError);
      Validator.notEmpty.bind(Validator, '  \t\n\r  ').should.throw(ValidationError);

      Validator.notEmpty(123);
      Validator.notEmpty(null);
      Validator.notEmpty(false);
      Validator.notEmpty('foo');
      Validator.notEmpty({foo:'bar'});

    });

  });

});
