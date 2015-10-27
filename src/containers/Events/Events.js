import React, { PropTypes } from 'react'

export default class Events extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div className="row">
      <h4>Events</h4>
    </div>

  }
}
