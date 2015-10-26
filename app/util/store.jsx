import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import { project } from '../reducers/project.js'
import { auth } from '../reducers/auth.js'

const reducer = combineReducers({
  router: routerStateReducer,
  project: project,
  auth: auth
});

export default function makeStore (initialState) {

  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({createHistory})
  )(createStore)(reducer, initialState);
  return store;

}

