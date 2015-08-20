react-router-reverse
====================

Components and helpers for route reversal in react-router@1.x.x.

## <ReverseLink to={routeName} params={params} {...props}/>

Wraps react-router's ```Link``` component to handle route reversal.

```js
import React from 'react';
import {ReverseLink} from 'react-router-reverse';


class MyComponent extends React.Component {
  render() {
    <nav>
      <li><ReverseLink to="landing"/><li>
      <li><ReverseLink to="detail" params={{id: 5}}/></li>
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
