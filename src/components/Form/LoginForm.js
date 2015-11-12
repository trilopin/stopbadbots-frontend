import React, { PropTypes, Component} from 'react';
import { reduxForm } from 'redux-form';
import classNames from 'classnames'



const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};



export const fields = ['username', 'password'];
class LoginForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  render () {

    const {
      fields: {username, password},
      handleSubmit,
      resetForm
      } = this.props;

    return <div className="login-box">
      <div className="login-logo">
        <a href="#"><b>Stop</b>BadBots</a>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={handleSubmit}>
          <div className={classNames({"form-group": true, 'has-feedback': !username.error, 'has-error': username.touched && username.error})}>
            <input type="text" className="form-control" placeholder="User Name" {...username} />
            <span className="fa fa-user form-control-feedback"></span>
          </div>
          <div className={classNames({"form-group": true, 'has-feedback': !password.error, 'has-error': password.touched && password.error})}>
            <input type="password" id="password" className="form-control" placeholder="Password" required="" {...password} />
            <span className="fa fa-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label>
                  <input type="checkbox"/> Remember Me
                </label>
              </div>
            </div>
            <div className="col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </form>

        <div className="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" className="btn btn-block btn-social btn-github btn-flat">
            <i className="fa fa-github"></i>
            Sign in using Github
          </a>
          <a href="#" className="btn btn-block btn-social btn-facebook btn-flat">
            <i className="fa fa-facebook"></i>
            Sign in using Facebook</a>
          <a href="#" className="btn btn-block btn-social btn-google btn-flat">
            <i className="fa fa-google-plus"></i>
            Sign in using Google
          </a>
        </div>
        <a href="#">I forgot my password</a><br/>
        <a href="register.html" className="text-center">Register a new membership</a>

      </div>
    </div>
  }
}


export default reduxForm({
  form: 'login',
  fields,
  validate
})(LoginForm);