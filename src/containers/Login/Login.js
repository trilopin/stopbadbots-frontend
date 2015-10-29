import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { LoginForm } from '../../components';

@connect((state, props) => {
  return {
    login: state.form.login,
    auth: state.auth
  }
})
export default class Login extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit () {
    const {username, password} = this.props.login;
    const {history} = this.context;
    const params = {
        name: username.value,
        password: password.value,
        redirect: () => {
            history.pushState({}, '/projects')
        }
    };
    this.props.dispatch(login(params));
  }

  render () {
    return (
      <div className="container">
        <LoginForm failed={this.props.auth.failed} onSubmit={this.handleSubmit}/>
      </div>
    );
  }

}
