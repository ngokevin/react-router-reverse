'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.reverse = reverse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactRouterLibURLUtils = require('react-router/lib/URLUtils');

var ReverseLink = (function (_React$Component) {
  _inherits(ReverseLink, _React$Component);

  function ReverseLink() {
    _classCallCheck(this, ReverseLink);

    _get(Object.getPrototypeOf(ReverseLink.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReverseLink, [{
    key: 'render',
    value: function render() {
      var path = reverse(router.routes, this.props.to, this.props.params);
      return _react2['default'].createElement(_reactRouter2['default'], _extends({}, this.props, { to: path }));
    }
  }], [{
    key: 'contextTypes',
    value: {
      router: _react2['default'].PropTypes.object.isRequired
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      to: _react2['default'].PropTypes.string,
      params: _react2['default'].PropTypes.object
    },
    enumerable: true
  }]);

  return ReverseLink;
})(_react2['default'].Component);

exports.ReverseLink = ReverseLink;

function reverse(routes, name, params) {
  var parentPath = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  // Written by https://github.com/maslianok.
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    var currentPath = parentPath + (route.path || '/');

    if (name == route.name) {
      return (0, _reactRouterLibURLUtils.formatPattern)(currentPath, params);
    };

    if (route.childRoutes) {
      var url = reverse(route.childRoutes, name, params, currentPath);
      if (url) {
        return url;
      }
    }
  };
  if (!parentPath) {
    console.error('No reverse match for name \'' + name + '\'');
  }
}

;
