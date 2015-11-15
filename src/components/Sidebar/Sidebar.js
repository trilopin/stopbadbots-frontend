import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import userPicture from '../../../assets/img/user2-160x160.jpg'


export default class Sidebar extends React.Component {

  constructor (props) {
    super(props)
  }


  render () {
    const {user, links} = this.props;

    const blocks = links.map( (block) =>
      <SidebarMenu
        key={ block.header }
        location={ location }
        header={ block.header }
        links={ block.links } />
    )

    return <aside className="main-sidebar">
      <section className="sidebar">
        <SidebarUser user={user}/>
        { blocks }
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


// <li className="treeview">
//   <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
//   <ul className="treeview-menu">
//     <li><a href="#">Link in level 2</a></li>
//     <li><a href="#">Link in level 2</a></li>
//   </ul>
// </li>