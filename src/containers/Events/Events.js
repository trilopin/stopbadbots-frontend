import React, { PropTypes } from 'react'
import { ContentHeader } from '../../components'

export default class Events extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div>
        <ContentHeader
            title="Events"
            subtitle="Events description"/>
        <section className="content">
        </section>
    </div>

  }
}
