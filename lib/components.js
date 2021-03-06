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
  return (function (_React$Component) {
    _inherits(ReverseLink, _React$Component);

    function ReverseLink() {
      _classCallCheck(this, ReverseLink);

      _get(Object.getPrototypeOf(ReverseLink.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ReverseLink, [{
      key: 'render',
      value: function render() {
        var path = (0, _utils.reverse)(this.props.routes || this.context.routes, this.props.to, this.props.params);
        return React.createElement(Link, _extends({}, this.props, { to: path }));
      }
    }], [{
      key: 'propTypes',
      value: {
        to: React.PropTypes.string,
        params: React.PropTypes.object,
        routes: React.PropTypes.array
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        routes: React.PropTypes.array
      },
      enumerable: true
    }]);

    return ReverseLink;
  })(React.Component);
}