import React, { PropTypes } from 'react'
import { ContentHeader } from '../../components'


export default class Projects extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div>
        <ContentHeader
            title="Projects"
            subtitle="Choose one of your projects and start enjoing"/>
        <section className="content">
        </section>
    </div>

  }
}
