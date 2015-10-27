'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.reverse = reverse;

var _reactRouterLibPatternUtils = require('react-router/lib/PatternUtils');

function reverse(routes, name, params) {
  var parentPath = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  // Written by https://github.com/maslianok.
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    var currentPath = parentPath + (route.path || '/');

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