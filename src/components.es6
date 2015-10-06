import {reverse} from './utils';

export function createReverseLink(React, Link) {
  return class ReverseLink extends React.Component {
    static propTypes = {
      to: React.PropTypes.string,
      routes: React.PropTypes.object.isRequired,
      params: React.PropTypes.object
    };
    render() {
      const path = reverse(this.props.routes, this.props.to, this.props.params)

      return <Link {...this.props} to={path}/>
    }
  }
}
