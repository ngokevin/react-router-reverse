import {formatPattern} from 'react-router/lib/PatternUtils';


export function reverse(routes, name, params, parentPath='') {
  // Written by https://github.com/maslianok.
  for (let i = 0; i < routes.length; i++) {
    let route = routes[i];
    let currentPath = parentPath + (route.path || '/');

    if (name == route.name) {
      return formatPattern(currentPath, params);
    };

    if (route.childRoutes) {
      let url = reverse(route.childRoutes, name, params, currentPath);
      if (url) {
        return url;
      }
    }
  };
  if (!parentPath) {
    console.error(`No reverse match for name '${name}'`);
  }
};
