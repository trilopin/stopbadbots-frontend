import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import { login } from '../actions/auth.jsx';



@connect((state, props) => {
  return {
    auth: state.auth
  }
})
export default class Application extends React.Component {

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
      <div id="layout">
        <Header/>

        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
