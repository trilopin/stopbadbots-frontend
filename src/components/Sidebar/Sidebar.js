import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import './Sidebar.scss';
import userPicture from '../../../assets/img/user2-160x160.jpg'


export default class Sidebar extends React.Component {

  constructor (props) {
    super(props)
  }


/*
$('[data-toggle=offcanvas]').click(function() {
    $(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
});
*/
  render () {
    const {user, project} = this.props;
    return <aside className="main-sidebar">
      <section className="sidebar">

        <div className="user-panel">
          <div className="pull-left image">
            <img src={ userPicture } className="img-circle" alt="User Image"/>
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..."/>
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>

        <ul className="sidebar-menu">
          <li className="header">HEADER</li>
          <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
          <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
          <li className="treeview">
            <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
            <ul className="treeview-menu">
              <li><a href="#">Link in level 2</a></li>
              <li><a href="#">Link in level 2</a></li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  }

  renderLinks(user, project, tiny) {
    const links = [
        { anchor: "Data", href: `/${user}/${project}/data`, className: "glyphicon glyphicon-list-alt" },
        { anchor: "Features", href: `/${user}/${project}/features`, className: "glyphicon glyphicon-signal" },
        { anchor: "Predictions", href: `/${user}/${project}/predictions`, className: "glyphicon glyphicon-flash" },
        { anchor: "Events", href: `/${user}/${project}/events`, className: "glyphicon glyphicon-alert" },
        { anchor: "Settings", href: `/${user}/${project}/settings`, className: "glyphicon glyphicon-cog" },
    ];
    return links.map( (link) =>
      <li
        key={"sidebar_link"+link.href}
        className={classNames({'active': this.props.location == link.href})}>
        <Link to={link.href} className={classNames({'text-center': tiny})}>
          <i className={link.className}></i> {!tiny && link.anchor}
        </Link>
      </li>
    )
  }
}


