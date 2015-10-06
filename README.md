react-router-reverse
====================

Components and helpers for route reversal in react-router@1.x.x.

## \<ReverseLink to={routeName} params={params} routes={routes} {...props}/\>

Wraps react-router's ```Link``` component to handle route reversal.

The routes collection, which is passed in to your route-handler component's props by React Router, must be passed in to ```ReverseLink```.

Note: Older versions of React Router added ```router``` to the context, but this has been removed as of ```rc1```.


```js
import React from 'react';
import {ReverseLink} from 'react-router-reverse';


class MyComponent extends React.Component {
  static propTypes: {
    routes: React.PropTypes.array.isRequired,
  }
  render() {
    return (
      <nav>
        <ReverseLink to="landing" routes={this.props.routes}/>Home</ReverseLink>
        <ReverseLink to="detail" params={{id: 5}} routes={this.props.routes}>Detail</ReverseLink>
      </nav>
    );
  }
}
```

## reverse(routes, name, params)

Reverses a route name given a react-router's ```routes```.

```js
import React from 'react';
import {reverse} from 'react-router-reverse';


class MyComponent extends React.Component {
  static propTypes: {
    routes: React.PropTypes.array.isRequired,
  }
  transitionHome = () => {
    const path = reverse(this.props.routes, 'landing');
    this.router.transition(path);
  }
  render() {
    return (
      <button onClick={this.transitionHome}>Go Home</button>
    );
  }
}
```

## Contributors

- [maslianok](https://github.com/maslianok) for originally writing the reverse
  utility.
