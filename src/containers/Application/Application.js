import React, { PropTypes } from 'react'
import { Header, Footer, Sidebar } from '../../components/'
import { connect } from 'react-redux';

@connect((state, props) => {
  return {
    auth: state.auth,
    location: state.router.location.pathname
  }
})
export default class Application extends React.Component {

  render() {

    return (
      <div className="wrapper">
          <div className="box">
            <div className="row row-offcanvas row-offcanvas-left">
              <Sidebar user={this.props.auth.username} project='citiservi_es' location={this.props.location}/>
              <div className="column col-sm-10 col-xs-11" id="main">
                <Header location={this.props.location}/>
                <div id="main">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
              // <Footer />
