'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transformYupValidationErrors = exports.transformYupValidationErrors = function transformYupValidationErrors(res) {
  if (res === null || (typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object') {
    return {};
  }

  return res.inner.reduce(function (acc, item) {
    return _extends({}, acc, _defineProperty({}, item.path, item.errors.join()));
  }, { _error: res.message });
};