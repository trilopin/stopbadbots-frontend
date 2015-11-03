import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import './Sidebar.scss';


export default class Sidebar extends React.Component {

  constructor (props) {
    super(props)
    this.toogleSidebar = this.toogleSidebar.bind(this)
    this.state = {
      sidebarOpened: true
    }
    console.log(this.state)
  }

  toogleSidebar(e) {
    e.preventDefault()
    this.setState({sidebarOpened: true})
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
    let hidden_xs = this.state.sidebarOpened ? 'hidden-xs' : '';
    let visible_xs = this.state.sidebarOpened ? 'visible-xs' : '';
    return  (
      <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li>
            <a href="#" className="visible-xs text-center" onClick={this.toogleSidebar}>
              <i className="glyphicon glyphicon-chevron-right"></i>
            </a>
          </li>
        </ul>
        <ul className={"nav " + hidden_xs} id="lg-menu">
          {this.renderLinks(user, project, false)}
        </ul>
        <ul className="list-unstyled hidden-xs" id="sidebar-footer">
          <li>
            <a href="http://www.bootply.com"><h3>STOPBADBOTS</h3></a>
          </li>
        </ul>
        <ul className={"nav " + visible_xs} id="xs-menu">
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


