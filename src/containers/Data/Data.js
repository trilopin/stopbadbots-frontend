import React, { PropTypes } from 'react'

export default class Data extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div className="row">
      <h4>Data</h4>
    </div>

  }
}
