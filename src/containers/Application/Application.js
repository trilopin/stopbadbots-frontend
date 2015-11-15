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

  updateDimensions() {
      const getHeight = (element) => parseInt(window.getComputedStyle(element).height)

      let neg = getHeight(this.refs.header) + getHeight(this.refs.footer)
      let window_height = $(window).height()
      let sidebar_height = getHeight(this.refs.sidebar)
      if (window_height >= sidebar_height) {
        this.refs.content.style.height = (window_height - neg) + 'px'
      } else {
        this.refs.content.style.height = sidebar_height + 'px'
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
      <div ref="header">
        <Header location={this.props.location}/>
      </div>
      <div ref="sidebar">
        <Sidebar
          user={this.props.auth.username}
          project='citiservi_es'
          location={this.props.location} />
        </div>
      <div className="content-wrapper" ref="content">
        {this.props.children}
      </div>
      <div ref="footer">
        <Footer/>
      </div>
    </div>
  }
}
