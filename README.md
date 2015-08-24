react-router-reverse
====================

Components and helpers for route reversal in react-router@1.x.x.

## \<ReverseLink to={routeName} params={params} {...props}/\>

Wraps react-router's ```Link``` component to handle route reversal.

As with ```Link```, ```router``` must be part of the owner component's context.

```js
import React from 'react';
import {ReverseLink} from 'react-router-reverse';


class MyComponent extends React.Component {
  render() {
    <nav>
      <ReverseLink to="landing"/>Home</ReverseLink>
      <ReverseLink to="detail" params={{id: 5}}>Detail</ReverseLink>
    </nav>
  }
}
```

## reverse(routes, name, params)

Reverses a route name given a react-router's ```routes```.

```js
import React from 'react';
import {reverse} from 'react-router-reverse';


class MyComponent extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  transitionHome = () => {
    const path = reverse(router.routes, 'landing');
    this.router.transition(path);
  }
  render() {
    <button onClick={this.transitionHome}>Go Home</button>
  }
}
```

## Contributors

- [maslianok](https://github.com/maslianok) for originally writing the reverse
  utility.
