import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { LoginForm } from '../../components';

@connect((state, props) => {
  return {
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


  handleSubmit (e) {
    e.preventDefault();
    console.log('submit')
    // const {history} = this.context;
    // const params = {
    //     name: 'jmpeso',
    //     password: '1234',
    //     redirect: () => {
    //         history.pushState({}, '/projects')
    //     }
    // };
    // this.props.dispatch(login(params));
  }

  render () {
    // <button className="btn btn-primary" onClick={this.handleClick}>Login</button>
    return (
      <div className="container">
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }

}
