import React, { PropTypes } from 'react'
import { ContentHeader } from '../../components'

export default class Settings extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div>
        <ContentHeader
            title="Settings"
            subtitle="Settings description"/>
        <section className="content">
        </section>
    </div>

  }
}
