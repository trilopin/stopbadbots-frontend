import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Header, Footer, Sidebar } from '../../components/'



@connect((state, props) => {
  return {
    auth: state.auth
  }
})
export default class LoggedApplication extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const params = { name: 'jmpeso', password: '1234' };
    dispatch(login(params));
  }

  render () {

    return (
      <div>
        <Header/>
        <Sidebar user={this.props.auth.username} project='citiservi_es'/>
        <div id="main">
          {this.props.children}
        </div>
        <Footer />
        </div>
    )
  }
}
