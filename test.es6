import assert from 'assert';
import _jsdom from 'jsdom';
import mochaJsdom from 'mocha-jsdom';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';

import {reverse, ReverseLink} from './lib/index';


global.document = _jsdom.jsdom('<html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator;
const jsdom = mochaJsdom.bind(this, {skipWindowCheck: true});


describe('ReverseLink', () => {
  jsdom();
  const React = require('react');
  const {createMemoryHistory} = require('history');

  class TestComponent extends React.Component {
    render() {
      return <nav>
        <ReverseLink to="landing" routes={this.props.routes}>Home</ReverseLink>
        <ReverseLink to="detail" params={{id: 5}} routes={this.props.routes}>Detail</ReverseLink>
        <ReverseLink to="detail-edit" params={{id: 10, user: 'kev'}} routes={this.props.routes}>
          Edit Post
        </ReverseLink>
      </nav>
    }
  }



  let div;
  beforeEach(() => {
    div = document.createElement('div');
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it('reverses relative path', done => {
    const router = (
      <Router history={createMemoryHistory()}>
        <Route name="app" component={TestComponent}>
          <Route name="landing" path="/" component={TestComponent}/>
          <Route name="detail" path="/detail/:id" component={TestComponent}>
            <Route name="detail-edit" path=":user/edit"
                   component={TestComponent}/>
          </Route>
        </Route>
      </Router>
    );

    ReactDOM.render(router, div, () => {
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

  it('reverses absolute nested path', done => {
    const router = (
      <Router history={createMemoryHistory()}>
        <Route name="app" component={TestComponent}>
          <Route name="landing" path="/" component={TestComponent}/>
          <Route name="detail" path="detail/:id" component={TestComponent}>
            <Route name="detail-edit" path="/user/:user/edit"
                   component={TestComponent}/>
          </Route>
        </Route>
      </Router>
    );

    ReactDOM.render(router, div, () => {
      const homeLink = div.querySelectorAll('a')[0];
      assert.equal(homeLink.getAttribute('href'), '/');
      assert.equal(homeLink.innerHTML, 'Home');

      const detailLink = div.querySelectorAll('a')[1];
      assert.equal(detailLink.getAttribute('href'), '/detail/5');
      assert.equal(detailLink.innerHTML, 'Detail');

      const editLink = div.querySelectorAll('a')[2];
      assert.equal(editLink.getAttribute('href'), '/user/kev/edit');
      assert.equal(editLink.innerHTML, 'Edit Post');
      done();
    });
  });
});


describe('ReverseLink nested context', () => {
  jsdom();
  const React = require('react');
  const {createMemoryHistory} = require('history');

  class App extends React.Component {
    render() {
      return <div>
        {this.props.children}
      </div>
    }
  }

  class Header extends React.Component {
    render() {
      return <header>
        <nav>
          <li><ReverseLink to="landing" routes={this.props.routes}>Home</ReverseLink></li>
          <li><ReverseLink to="detail" routes={this.props.routes}>Detail</ReverseLink></li>
        </nav>
      </header>
    }
  }

  class TestComponent extends React.Component {
    render() {
      return <div>
        <Header {...this.props}/>
      </div>
    }
  }

  const router = <Router history={createMemoryHistory()}>
    <Route name="app" component={App}>
      <Route name="landing" path="/" component={TestComponent}/>
      <Route name="detail" path="/detail" component={TestComponent}/>
    </Route>
  </Router>

  let div;
  beforeEach(() => {
    div = document.createElement('div');
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it('reverses', done => {
    ReactDOM.render(router, div, () => {
      const homeLink = div.querySelectorAll('a')[0];
      assert.equal(homeLink.getAttribute('href'), '/');
      assert.equal(homeLink.innerHTML, 'Home');
      done();
    });
  });
});
