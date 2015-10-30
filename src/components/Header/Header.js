import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './Header.scss';


export default class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div id="header" className="row">
      <nav className="navbar navbar-sbb">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">STOPBADBOTS</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  }

}


