import React, { PropTypes } from 'react'

export default class Settings extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div className="col-xs-12">
      <h4>Settings</h4>
    </div>

  }
}
