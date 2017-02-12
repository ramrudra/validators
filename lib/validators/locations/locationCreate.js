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
  address: _yup2.default.string().required(),
  latitude: _yup2.default.string().required(),
  longitude: _yup2.default.string().required(),
  sw_lat: _yup2.default.string().required(),
  sw_lng: _yup2.default.string().required(),
  ne_lat: _yup2.default.string().required(),
  google_place_id: _yup2.default.string().required(),
  groupId: _yup2.default.string().required()
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