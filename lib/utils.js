'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.reverse = reverse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactRouterLibPatternUtils = require('react-router/lib/PatternUtils');

var _urlJoin = require('url-join');

var _urlJoin2 = _interopRequireDefault(_urlJoin);

/**
 * @author Adapted from https://github.com/maslianok.
 */

function reverse(routes, name, params) {
  var parentPath = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  if (!routes) {
    console.error('Routes were not provided for reverse().');
  }

  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];

    var currentPath = undefined;
    if (route.path && route.path[0] === '/') {
      // Absolute path.
      currentPath = route.path;
    } else {
      // Relative path.
      currentPath = (0, _urlJoin2['default'])(parentPath, route.path || '/');
    }

    if (name == route.name) {
      return (0, _reactRouterLibPatternUtils.formatPattern)(currentPath, params);
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