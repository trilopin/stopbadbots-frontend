import React, { PropTypes } from 'react'
import { ContentHeader } from '../../components'
import { connect } from 'react-redux';
import { Link } from 'react-router'


@connect((state, props) => {
  return {
    projects: state.project,
    auth: state.auth
  }
})
export default class Projects extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const projectsItems = this.props.projects.items.map( (project) =>
      <ProjectItem
        key={project.full_name}
        user={this.props.auth.username}
        project={project} />
    )
    return <div>
        <ContentHeader
            title="Projects"
            subtitle="Choose one of your projects and start"/>
        <section className="content">
        { projectsItems }
        </section>
    </div>
  }
}


class ProjectItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { user, project } = this.props
    return <div className="col-xs-12">
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">
            <Link to={"/"+project.full_name+"/data"}>{ project.name }</Link>
          </h3>
        </div>
        <div className="box-body">
            <p>{ project.description }</p>
        </div>
      </div>
    </div>
  }
}

