import React, { PropTypes } from 'react'

export default class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <footer className="main-footer">
      <div className="pull-right hidden-xs">
        Anything you want
      </div>
      <strong>Copyright &copy; 2015 <a href="#">Company</a>.</strong> All rights reserved.
    </footer>

  }
}
