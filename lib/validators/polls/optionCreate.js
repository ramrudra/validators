'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncBlurFields = exports.shouldAsyncValidate = exports.asyncValidate = exports.schema = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index = require('../../helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = exports.schema = _yup2.default.object().shape({
  text: _yup2.default.mixed().required().test('options', 'Invalid Options', function (value) {
    // eslint-disable-line
    if (!_lodash2.default.isNull(value)) {
      if (_lodash2.default.isString(value)) {
        return true;
      } else if (_lodash2.default.isArray(value)) {
        var isDateArray = true;
        _lodash2.default.each(value, function (ele) {
          if (!(0, _moment2.default)(ele).isValid()) {
            isDateArray = true;
          }
          return isDateArray;
        });
      }
    }
    return false;
  })
});

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