import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import { project } from '../reducers/project'
import { auth } from '../reducers/auth'
import DevTools from '../containers/DevTools/DevTools'
import { persistState } from 'redux-devtools'
import { routes } from  '../routes'


const reducer = combineReducers({
  router: routerStateReducer,
  auth,
  project
});


export default function makeStore () {

  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({routes, createHistory}),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)(reducer);
  console.log(store.getState());
  return store;

}

