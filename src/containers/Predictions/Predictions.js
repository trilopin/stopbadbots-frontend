import React, { PropTypes } from 'react'
import { ContentHeader } from '../../components'

export default class Predictions extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div>
        <ContentHeader
            title="Predictions"
            subtitle="prediction description"/>
        <section className="content">
        </section>
    </div>

  }
}
