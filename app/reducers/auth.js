import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGIN_REQUESTED } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  auth: {
    token: null,
    isFetching: false
  }
}

const actionHandlers = {
  [LOGIN_SUCCEDED]: (state, action) => (
    {
      auth: Object.assign({}, state.auth, {
        token: action.token
      })
    }),
  [LOGIN_REQUESTED]: (state, action) => (
    {
      projects: Object.assign({}, state.projects, {
        isFetching: true
      })
    }),
  [LOGIN_FAILED]: (state, action) => (
    {
      projects: Object.assign({}, state.projects, {
        isFetching: false
      })
    }),
}

export const project = createReducer(initialState, actionHandlers)

