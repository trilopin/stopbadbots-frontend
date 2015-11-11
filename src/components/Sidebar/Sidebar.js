import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import './Sidebar.scss';
import userPicture from '../../../assets/img/user2-160x160.jpg'


export default class Sidebar extends React.Component {

  constructor (props) {
    super(props)
  }


  render () {
    const {user, project} = this.props;
    const globalLinks = [
      { anchor: "Projects", href: `/projects`, className: "fa fa-list-ul" },
    ]
    const projectLinks = [
      { anchor: "Data", href: `/${user}/${project}/data`, className: "fa fa-table" },
      { anchor: "Features", href: `/${user}/${project}/features`, className: "fa fa-signal" },
      { anchor: "Predictions", href: `/${user}/${project}/predictions`, className: "fa fa-rocket" },
      { anchor: "Events", href: `/${user}/${project}/events`, className: "fa fa-exclamation-triangle" },
      { anchor: "Settings", href: `/${user}/${project}/settings`, className: "fa fa-cogs" },
    ]
    return <aside className="main-sidebar">
      <section className="sidebar">

        <SidebarUser user={user}/>


        <SidebarMenu
          location={ location }
          header="GLOBAL"
          links={ globalLinks } />

        <SidebarMenu
          location={ location }
          header={ project.toUpperCase() }
          links={ projectLinks } />

      </section>
    </aside>
  }
}



class SidebarUser extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { user } = this.props;
    return <div className="user-panel">
      <div className="pull-left image">
        <img src={ userPicture } className="img-circle" alt="User Image"/>
      </div>
      <div className="pull-left info">
        <p>{ user }</p>
        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>
  }
}

class SidebarMenu extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    const {location, header, links} = this.props
    const items = links.map( (link) =>
      <li
        key={"sidebar_link"+link.href}
        className={classNames({'active': location == link.href})}>
        <Link to={link.href}>
          <i className={link.className}></i>
          <span>{link.anchor}</span>
        </Link>
      </li>
    )

    return <ul className="sidebar-menu">
      <li className="header">{ header }</li>
      { items }
    </ul>
  }

}
