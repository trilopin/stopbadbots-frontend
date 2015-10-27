import React, { PropTypes } from 'react';
import { connect } from 'react-redux';



export default class Features extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div className="row">
      <h4>Features</h4>
    </div>

  }
}
