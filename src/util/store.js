import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import { project } from '../reducers/project'
import { app } from '../reducers/app'
import { auth } from '../reducers/auth'
import DevTools from '../containers/DevTools/DevTools'
import { persistState } from 'redux-devtools'


const reducer = combineReducers({
  router: routerStateReducer,
  form: formReducer,
  app,
  auth,
  project
});


export default function makeStore(getRoutes) {
  const routes = getRoutes();
  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({getRoutes, createHistory}),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)(reducer);
  return store;
}

