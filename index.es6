import React from 'react';
import {Link} from 'react-router';
import {formatPattern} from 'react-router/lib/URLUtils';


export class ReverseLink extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };
  static propTypes = {
    to: React.PropTypes.string,
    params: React.PropTypes.object
  };
  static childContextTypes = {
    router: React.PropTypes.object
  };
  getChildContext = () => {
    return {
      router: this.context.router
    };
  }
  render() {
    const path = reverse(this.context.router.routes, this.props.to,
                         this.props.params)

    return <Provider router={this.context.router}>
      <Link {...this.props} to={path}/>
    </Provider>
  }
}


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


class Provider extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    router: React.PropTypes.object.isRequired
  };
  static childContextTypes = {
    router: React.PropTypes.object.isRequired
  };
  getChildContext = () => {
    return {
      router: this.props.router
    };
  }
  render() {
    return this.props.children;
  }
}
