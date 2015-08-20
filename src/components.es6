import {reverse} from './utils';


export function createReverseLink(React, Link) {
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

  return class ReverseLink extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object.isRequired
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
}
