import assert from 'assert';
import React from 'react/addons';
import {Route, Router} from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';

import {reverse, ReverseLink} from './index';


describe('ReverseLink', () => {
  class TestComponent extends React.Component {
    render() {
      return <nav>
        <ReverseLink to="landing">Home</ReverseLink>
        <ReverseLink to="detail" params={{id: 5}}>Detail</ReverseLink>
      </nav>
    }
  }

  const router = <Router history={history}>
    <Route name="app" component={TestComponent}>
      <Route name="landing" path="context.html" component={TestComponent}/>
      <Route name="detail" path="/detail/:id" component={TestComponent}/>
    </Route>
  </Router>

  let div;
  beforeEach(() => {
    div = document.createElement('div');
  });
  afterEach(() => {
    React.unmountComponentAtNode(div);
  });

  it('reverses', done => {
    React.render(router, div, () => {
      console.log(div.innerHTML);
      done();
    });
  });
});


describe('reverse', () => {
});
