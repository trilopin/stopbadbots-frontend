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

  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  getHeight(className) {
    let element = document.getElementsByClassName(className)
    return parseInt(window.getComputedStyle(element[0]).height)
  }

  setHeight(className, height) {
    let element = document.getElementsByClassName(className)[0]
    element.style.height = height + 'px'
  }

  updateDimensions() {
      let neg = this.getHeight('main-header') + this.getHeight('main-footer')
      let window_height = $(window).height()
      let sidebar_height = this.getHeight('sidebar')
      if (window_height >= sidebar_height) {
        this.setHeight('content-wrapper',  window_height - neg)
      } else {
        this.setHeight('content-wrapper',  sidebar_height)
      }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
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
