import React, { PropTypes } from 'react'
import { Header, Footer, Sidebar } from '../../components/'
import { connect } from 'react-redux';

@connect((state, props) => {
  return {
    auth: state.auth,
    location: state.router.location.pathname
  }
})
export default class Application extends React.Component {

  constructor (props) {
    super(props)
  }


  render() {
    return <div className="wrapper">
      <Header location={this.props.location}/>
      <Sidebar
        user={this.props.auth.username}
        project='citiservi_es'
        location={this.props.location} />
      <div className="content-wrapper">
        {this.props.children}
      </div>
      <Footer/>
    </div>
  }
}
