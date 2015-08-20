import assert from 'assert';
import _jsdom from 'jsdom';
import mochaJsdom from 'mocha-jsdom';
import {Route, Router} from 'react-router';

import {reverse, ReverseLink} from './index';


global.document = _jsdom.jsdom('<html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator;
const jsdom = mochaJsdom.bind(this, {skipWindowCheck: true});


describe('ReverseLink', () => {
  jsdom();
  const React = require('react/addons');
  const history = require('react-router/lib/MemoryHistory');

  class TestComponent extends React.Component {
    render() {
      return <nav>
        <ReverseLink to="landing">Home</ReverseLink>
        <ReverseLink to="detail" params={{id: 5}}>Detail</ReverseLink>
        <ReverseLink to="detail-edit" params={{id: 10, user: 'kev'}}>
          Edit Post
        </ReverseLink>
      </nav>
    }
  }

  const router = <Router history={new history('/')}>
    <Route name="app" component={TestComponent}>
      <Route name="landing" path="/" component={TestComponent}/>
      <Route name="detail" path="/detail/:id" component={TestComponent}>
        <Route name="detail-edit" path="/:user/edit"
               component={TestComponent}/>
      </Route>
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
      const homeLink = div.querySelectorAll('a')[0];
      assert.equal(homeLink.getAttribute('href'), '/');
      assert.equal(homeLink.innerHTML, 'Home');

      const detailLink = div.querySelectorAll('a')[1];
      assert.equal(detailLink.getAttribute('href'), '/detail/5');
      assert.equal(detailLink.innerHTML, 'Detail');

      const editLink = div.querySelectorAll('a')[2];
      assert.equal(editLink.getAttribute('href'), '/detail/10/kev/edit');
      assert.equal(editLink.innerHTML, 'Edit Post');
      done();
    });
  });
});
