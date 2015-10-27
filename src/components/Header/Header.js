import React, { PropTypes } from 'react'
import { Link } from 'react-router'


export default class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div className="row">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Project name</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
            {this.renderLinks('left')}
            </ul>
            <ul className="nav navbar-nav navbar-right">
            {this.renderLinks('right')}
            </ul>
          </div>
        </div>
      </nav>


    </div>
  }

  renderLinks(zone) {
    const links = {
      left: [
        { anchor: "trilopin", href: "/user/trilopin"},
        { anchor: "trilopin/react-webpack-test", href: "/user/trilopin/repo/react-webpack-test"}
      ],
      right: [
        { anchor: "Right 1 ", href: "/page1"},
        { anchor: "Right 2", href: "/page2"}
      ]
    };
    return links[zone].map( (link) =>
      <li><Link key={link.href} to={link.href}>{link.anchor}</Link></li>
    )
  }
}


