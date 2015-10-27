import {reverse} from './utils';


export function createReverseLink(React, Link) {
  return class ReverseLink extends React.Component {
    static propTypes = {
      to: React.PropTypes.string,
      params: React.PropTypes.object,
      routes: React.PropTypes.array
    };

    static contextTypes = {
      routes: React.PropTypes.array
    }

    render() {
      const path = reverse(this.props.routes || this.context.routes,
                           this.props.to, this.props.params);
      return <Link {...this.props} to={path}/>
    }
  }
}
