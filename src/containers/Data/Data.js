import React, { PropTypes } from 'react'
import { ContentHeader } from '../../components'

export default class Data extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div>
        <ContentHeader
            title="Data"
            subtitle="Data description"/>
        <section className="content">
        </section>
    </div>

  }
}
