import React from 'react'

export default class Debug extends React.Component {


  render () {
    return <table className="table">
      <thead>
        <tr>
          <th>param</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
      {this.render_li(this.props.data)}
      </tbody>
    </table>
  }

  render_li(object) {
    return Object.keys(object).map( (key, index) =>
      <tr key={"index" + index + key}>
        <td>{key}</td>
        <td>{object[key]}</td>
      </tr>
    )
  }
}
