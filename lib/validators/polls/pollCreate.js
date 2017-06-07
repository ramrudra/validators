'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncBlurFields = exports.shouldAsyncValidate = exports.asyncValidate = exports.createSchema = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('../../helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSchema = exports.createSchema = _yup2.default.object().shape({
  title: _yup2.default.string().required(),
  description: _yup2.default.string().required(),
  image: _yup2.default.string().nullable(true).url(),
  groupId: _yup2.default.number().integer().required(),
  startDate: _yup2.default.string().nullable(true),
  endDate: _yup2.default.string().nullable(true).test('poll-dates', 'End Date is required', function (value) {
    // eslint-disable-line
    var parent = this.parent;
    var startDate = parent.startDate;
    if (!_lodash2.default.isNull(startDate)) {
      if (_lodash2.default.isNull(value)) {
        return false;
      }
    }
    return true;
  }).test('poll-dates', 'End Date should be greated than Start Date', function (value) {
    // eslint-disable-line
    var parent = this.parent;
    var startDate = parent.startDate;
    if (_lodash2.default.isNull(startDate)) {
      return true;
    }
    if ((0, _moment2.default)(value).isValid() && (0, _moment2.default)(startDate).isValid()) {
      if ((0, _moment2.default)(value).diff((0, _moment2.default)(startDate), 'days') > 0) {
        return true;
      }
      return false;
    }
    return false;
  }),
  locationId: _yup2.default.string().required(),
  pollDataType: _yup2.default.string().required().test('poll-type', 'Invalid Poll Type', function (value) {
    // eslint-disable-line
    if (value === 'DATETIME' || value === 'STRING') {
      return true;
    }
    return false;
  })
}).required();

var asyncValidate = exports.asyncValidate = function asyncValidate(values) {
  return createSchema.validate(values, {
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