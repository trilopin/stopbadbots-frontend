import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import makeStore from './util/store'
import { DevTools } from './containers/'
import getRoutes from './routes';
import makeRouteHooksSafe from './util/makeRouteHooksSafe';
import './scss/main.scss';


const store = makeStore(makeRouteHooksSafe(getRoutes));

class Root extends React.Component {

  render () {
    return <Provider store={store}>
      <div>
        <ReduxRouter routes={getRoutes(store)} />
        <DevTools />
      </div>
    </Provider>

  }
}

ReactDOM.render(<Root/>, document.getElementById('app'))