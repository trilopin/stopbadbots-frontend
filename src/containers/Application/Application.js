import React, { PropTypes } from 'react'
import { Header, Footer, Sidebar } from '../../components/'
import { connect } from 'react-redux';

@connect((state, props) => {
  return {
    auth: state.auth
  }
})
export default class Application extends React.Component {

  render() {

    return (
      <div id="layout">
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
