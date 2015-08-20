'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('./components');

var _utils = require('./utils');

var ReverseLink = (0, _components.createReverseLink)(_react2['default'], _reactRouter.Link);
exports.ReverseLink = ReverseLink;
exports.reverse = _utils.reverse;