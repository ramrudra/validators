'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncBlurFields = exports.shouldAsyncValidate = exports.asyncValidate = exports.schema = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _index = require('../../helpers/index');

var _pollCreate = require('./pollCreate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = exports.schema = _yup2.default.object().shape({
  groupId: _yup2.default.number().integer().nullable(true)
});

var editSchema = _pollCreate.createSchema.concat(schema);

var asyncValidate = exports.asyncValidate = function asyncValidate(values) {
  return editSchema.validate(values, {
    abortEarly: false
  }).then(function () {
    return true;
  }).catch(function (res) {
    throw (0, _index.transformYupValidationErrors)(res);
  });
};

var shouldAsyncValidate = exports.shouldAsyncValidate = function shouldAsyncValidate() {
  return true;
};

var asyncBlurFields = exports.asyncBlurFields = [];