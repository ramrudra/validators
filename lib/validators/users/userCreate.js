'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncBlurFields = exports.shouldAsyncValidate = exports.asyncValidate = exports.schema = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _index = require('../../helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = exports.schema = _yup2.default.object().shape({
  username: _yup2.default.string().required(),
  password: _yup2.default.string().required(),
  name: _yup2.default.string().required(),
  company: _yup2.default.string().nullable(true),
  email: _yup2.default.string().required(),
  phone: _yup2.default.string().nullable(true),
  address: _yup2.default.string().nullable(true)
}).required();

var asyncValidate = exports.asyncValidate = function asyncValidate(values) {
  return schema.validate(values, {
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