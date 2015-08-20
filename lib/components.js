'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.createReverseLink = createReverseLink;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utils = require('./utils');

function createReverseLink(React, Link) {
  var Provider = (function (_React$Component) {
    _inherits(Provider, _React$Component);

    function Provider() {
      var _this = this;

      _classCallCheck(this, Provider);

      _get(Object.getPrototypeOf(Provider.prototype), 'constructor', this).apply(this, arguments);

      this.getChildContext = function () {
        return {
          router: _this.props.router
        };
      };
    }

    _createClass(Provider, [{
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        children: React.PropTypes.any,
        router: React.PropTypes.object.isRequired
      },
      enumerable: true
    }, {
      key: 'childContextTypes',
      value: {
        router: React.PropTypes.object.isRequired
      },
      enumerable: true
    }]);

    return Provider;
  })(React.Component);

  return (function (_React$Component2) {
    _inherits(ReverseLink, _React$Component2);

    function ReverseLink() {
      var _this2 = this;

      _classCallCheck(this, ReverseLink);

      _get(Object.getPrototypeOf(ReverseLink.prototype), 'constructor', this).apply(this, arguments);

      this.getChildContext = function () {
        return {
          router: _this2.context.router
        };
      };
    }

    _createClass(ReverseLink, [{
      key: 'render',
      value: function render() {
        var path = (0, _utils.reverse)(this.context.router.routes, this.props.to, this.props.params);

        return React.createElement(
          Provider,
          { router: this.context.router },
          React.createElement(Link, _extends({}, this.props, { to: path }))
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        router: React.PropTypes.object.isRequired
      },
      enumerable: true
    }, {
      key: 'propTypes',
      value: {
        to: React.PropTypes.string,
        params: React.PropTypes.object
      },
      enumerable: true
    }, {
      key: 'childContextTypes',
      value: {
        router: React.PropTypes.object
      },
      enumerable: true
    }]);

    return ReverseLink;
  })(React.Component);
}