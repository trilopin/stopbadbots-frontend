import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './Sidebar.scss';


export default class Sidebar extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props;
    return <div id="sidebar" className="col-xs-1">
        <ul className="nav nav-pills nav-stacked">
            {this.renderLinks(user, project)}
        </ul>
    </div>
  }


  renderLinks(user, project) {
    const links = [
        { anchor: "Data", href: `/${user}/${project}/data` },
        { anchor: "Features", href: `/${user}/${project}/features` },
        { anchor: "Predictions", href: `/${user}/${project}/predictions` },
        { anchor: "Events", href: `/${user}/${project}/events` },
        { anchor: "Settings", href: `/${user}/${project}/settings` },
    ];
    return links.map( (link) =>
      <li
        key={"sidebar_link"+link.href}
        className={this.props.location == link.href && "active"}>
        <Link to={link.href}>{link.anchor}</Link>
      </li>
    )
  }
}