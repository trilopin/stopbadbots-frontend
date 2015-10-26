import React, { PropTypes } from 'react'

export default class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div className="row" id="footer">
        <div className="container-fluid">
        <p>Footer de app.</p>
        </div>
    </div>

  }
}
