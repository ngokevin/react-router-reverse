import {formatPattern} from 'react-router/lib/PatternUtils';
import urlJoin from 'url-join';


/**
 * @author Adapted from https://github.com/maslianok.
 */
export function reverse(routes, name, params, parentPath='') {
  for (let i = 0; i < routes.length; i++) {
    let route = routes[i];

    let currentPath;
    if (route.path && route.path[0] === '/') {
      // Absolute path.
      currentPath = route.path;
    } else {
      // Relative path.
      currentPath = urlJoin(parentPath, (route.path || '/'));
    }

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
