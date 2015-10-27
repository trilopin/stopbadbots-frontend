import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

@connect((state, props) => {
  return {
    auth: state.auth
  }
})
export default class Login extends Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault();
    const params = { name: 'jmpeso', password: '1234' };
    this.props.dispatch(login(params));
  }

  render () {
    return (
      <div className="container">
        <h1>Login</h1>
        <button className="btn btn-primary" onClick={this.handleClick}>Login</button>
      </div>
    );
  }

}
