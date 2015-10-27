react-router-reverse
====================

Components and helpers for route reversal in react-router@1.x.x.

## \<ReverseLink to={routeName} params={params} routes={routes} {...props}/\>

Wraps react-router's ```Link``` component to handle route reversal.  As of
```rc1```, react-router's ```routes``` must be passed into ```ReverseLink```
as react-router no longer makes use of React context.

```js
import React from 'react';
import {ReverseLink} from 'react-router-reverse';


class MyComponent extends React.Component {
  static propTypes = {
    routes: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <nav>
        <ReverseLink to="landing" routes={this.props.routes}>
          Home
        </ReverseLink>
        <ReverseLink to="detail" params={{id: 5}} routes={this.props.routes}>
          Detail
        </ReverseLink>
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
  static propTypes = {
    routes: React.PropTypes.array.isRequired
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

- [maslianok](https://github.com/maslianok) for writing reverse util.
- [joellanciaux](https://github.com/joellanciaux) for upgrading from
  react-router@1.0.0-beta3 to react-router@1.0.0-rc3.
