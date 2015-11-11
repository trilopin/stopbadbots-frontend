import React, { PropTypes } from 'react';
import { ContentHeader } from '../../components'

export default class Features extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {user, project} = this.props.params;
    return <div>
        <ContentHeader
            title="Features"
            subtitle="Features description"/>
        <section className="content">
        </section>
    </div>

  }
}
