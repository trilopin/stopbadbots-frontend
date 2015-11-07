import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import './Sidebar.scss';



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
    return  (
      <div className={"column sidebar-offcanvas " +(!this.props.sidebarForceOpened ? "col-xs-1" : "col-xs-2")} id="sidebar">
        <ul className="nav">
          <li>
            <a href="#" className="text-left" onClick={this.props.toogleSidebar}>
              <i className={"glyphicon "+ (!this.props.sidebarForceOpened ? "glyphicon-chevron-left" : "glyphicon-chevron-right")}></i>
            </a>
          </li>
        </ul>
        <ul className={"nav " + (!this.props.sidebarForceOpened ? "hidden-xs" : "visible-xs")} id="lg-menu">
          {this.renderLinks(user, project, false)}
        </ul>
        <ul className="list-unstyled hidden-xs" id="sidebar-footer">
          <li>
            <a href="#"><h3>SBB</h3></a>
          </li>
        </ul>
        <ul className={"nav " + (!this.props.sidebarForceOpened ? "visible-xs": "hidden-xs")} id="xs-menu">
          {this.renderLinks(user, project, true)}
        </ul>
      </div>
    )
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


