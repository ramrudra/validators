'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformYupValidationErrors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.checkEndDate = checkEndDate;
exports.checkEndDateGreater = checkEndDateGreater;
exports.checkPollType = checkPollType;
exports.validPollOption = validPollOption;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transformYupValidationErrors = exports.transformYupValidationErrors = function transformYupValidationErrors(res) {
  if (res === null || (typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object') {
    return {};
  }

  return res.inner.reduce(function (acc, item) {
    return _extends({}, acc, _defineProperty({}, item.path, item.errors.join()));
  }, { _error: res.message });
};

function checkEndDate(value) {
  var parent = this.parent;
  var startDate = parent.startDate;
  if (!_lodash2.default.isNull(startDate)) {
    if (_lodash2.default.isNull(value)) {
      return false;
    }
  }
  return true;
}

function checkEndDateGreater(value) {
  var parent = this.parent;
  var startDate = parent.startDate;
  if (!startDate || _lodash2.default.isNull(startDate)) {
    return true;
  }
  if ((0, _moment2.default)(value).isValid() && (0, _moment2.default)(startDate).isValid()) {
    if ((0, _moment2.default)(value).diff((0, _moment2.default)(startDate), 'days') > 0) {
      return true;
    }
    return false;
  }
  return false;
}

function checkPollType(value) {
  if (value === 'DATETIME' || value === 'STRING') {
    return true;
  }
  return false;
}

function validPollOption(value) {
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
}