import React, { PropTypes } from 'react'




export default class Application extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div id="layout">
          {this.props.children}
      </div>
    )
  }
}
