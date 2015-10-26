import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import makeStore from './util/store.jsx';
import DevTools from './containers/DevTools.js'
import './scss/main.scss';

const initialState = {
};

const store = makeStore(initialState);


class Root extends React.Component {

  render () {
    return <Provider store={store}>
      <div>
        <ReduxRouter location={{}} params={{}} components={[]} routes={[]}/>
        <DevTools />
      </div>
    </Provider>

  }
}

ReactDOM.render(<Root/>, document.getElementById('app'))