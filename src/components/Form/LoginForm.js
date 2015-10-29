import React, { PropTypes, Component} from 'react';
import { reduxForm } from 'redux-form';
import './LoginForm.scss';



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
    return (
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <div className={username.touched && username.error && "has-error"}>
          <input type="text" className="form-control" placeholder="User Name" {...username} />
        </div>
        <div className={password.touched && password.error && "has-error"}>
          <input type="password" id="password" className="form-control" placeholder="Password" required="" {...password} />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    )

  }
}

export default reduxForm({
  form: 'login',
  fields,
  validate
})(LoginForm);