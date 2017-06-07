'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncBlurFields = exports.shouldAsyncValidate = exports.asyncValidate = exports.createSchema = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _index = require('../../helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSchema = exports.createSchema = _yup2.default.object().shape({
  title: _yup2.default.string().required(),
  description: _yup2.default.string().required(),
  image: _yup2.default.string().nullable(true).url(),
  groupId: _yup2.default.number().integer().required(),
  startDate: _yup2.default.string().nullable(true),
  endDate: _yup2.default.string().nullable(true).test('event-dates', 'End Date is required', _index.checkEndDate).test('event-dates', 'End Date should be greated than Start Date', _index.checkEndDateGreater),
  locationId: _yup2.default.string().required('Location is needed to create an event')
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