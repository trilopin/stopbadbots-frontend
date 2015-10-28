import React, { PropTypes, Component} from 'react';
import { reduxForm } from 'redux-form';

export const fields = ['userName', 'password'];
class LoginForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render () {
    const {
      fields: {userName, password},
      handleSubmit,
      resetForm
      } = this.props;
    return <form onSubmit={handleSubmit}>
      <div>
        <label>User Name</label>
        <div>
          <input type="text" placeholder="UserName" {...userName}/>
        </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="text" placeholder="Password" {...password}/>
          </div>
        </div>
      <button type='submit'>Submit</button>
    </form>
  }
}

export default reduxForm({
  form: 'login',
  fields
})(LoginForm);