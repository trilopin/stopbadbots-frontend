import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './Header.scss';


export default class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="navbar navbar-darkgrey navbar-static-top">
        <nav className="navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/projects"><i className="glyphicon glyphicon-th-list"></i> Projects</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/logout"><i className="glyphicon glyphicon-user"></i> Logout</Link>
          </li>
        </ul>
        </nav>
    </div>
    )
  }

}


