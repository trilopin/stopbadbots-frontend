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
      const getHeight = (element) => {
        return parseInt(window.getComputedStyle(element).height)
      }

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

    let sidebarLinks = [
      {
        header: 'GLOBAL',
        links: [
          { anchor: "Projects", href: `/projects`, className: "fa fa-list-ul" },
        ]
      }
    ]

    if(true) {
      let project = 'my_project'
      sidebarLinks.push({
        header: project.toUpperCase(),
        links: [
          { anchor: "Data", href: `/${this.props.auth.username}/${project}/data`, className: "fa fa-table" },
          { anchor: "Features", href: `/${this.props.auth.username}/${project}/features`, className: "fa fa-signal" },
          { anchor: "Predictions", href: `/${this.props.auth.username}/${project}/predictions`, className: "fa fa-rocket" },
          { anchor: "Events", href: `/${this.props.auth.username}/${project}/events`, className: "fa fa-exclamation-triangle" },
          { anchor: "Settings", href: `/${this.props.auth.username}/${project}/settings`, className: "fa fa-cogs" },
        ]
      })
    }

    return <div className="wrapper">
      <div ref="header">
        <Header location={this.props.location}/>
      </div>
      <div ref="sidebar">
        <Sidebar
          user={this.props.auth.username}
          links={sidebarLinks}
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
