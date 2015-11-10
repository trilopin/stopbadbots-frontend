import React, { PropTypes } from 'react'

export default class Events extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div className="col-xs-12">
      <h4>Events</h4>
    </div>

  }
}
