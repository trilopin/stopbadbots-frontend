import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'



export default class ContentHeader extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    const {title, subtitle, breadcrumb} = this.props
    return <section className="content-header">
      <h1>
        { title }
        <small>{ subtitle }</small>
      </h1>
      { this.renderBreadcrumb(breadcrumb) }
    </section>
  }

  renderBreadcrumb(breadcrumb) {
      // <ol class="breadcrumb">
      //   <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
      //   <li class="active">Here</li>
      // </ol>
      return <ol className="breadcrumb">
      </ol>
  }

}
