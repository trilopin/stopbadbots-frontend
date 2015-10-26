import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import makeStore from './util/store.jsx';
import Application from './containers/application.jsx'
import Home from './containers/home.jsx'
import User from './containers/user.jsx'
import Repo from './containers/repo.jsx'

import './scss/main.scss';

const initialState = {};

const store = makeStore(initialState);

class Root extends React.Component {

  render () {
    return <Provider store={store}>
        <ReduxRouter>
          <Route component={Application}>
            <Route path="/" component={Home}/>
            <Route path="user/:user" component={User}/>
            <Route path="user/:user/repo/:repo" component={Repo}/>
          </Route>
        </ReduxRouter>
    </Provider>

  }
}

ReactDOM.render(<Root/>, document.getElementById('app'))