'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncBlurFields = exports.shouldAsyncValidate = exports.asyncValidate = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _index = require('../../helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _yup2.default.object().shape({
  title: _yup2.default.string().required(),
  description: _yup2.default.string().required(),
  // image: yup.string().required(),
  groupId: _yup2.default.string().required(),
  startDate: _yup2.default.string().required(),
  endDate: _yup2.default.string().required(),
  locationId: _yup2.default.string().required(),
  pollDataType: _yup2.default.string().required()
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