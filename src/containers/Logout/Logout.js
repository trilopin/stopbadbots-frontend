import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

@connect((state, props) => {
  return {
    auth: state.auth
  }
})
export default class Logout extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const {history} = this.context;
    const params = {
      redirect: () => {
          history.pushState({}, '/login')
      }
    };
    this.props.dispatch(logout(params));

  }


  render () {
    return <div/>
  }

}
