import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGIN_REQUESTED } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  token: null,
  isFetching: false
}

const actionHandlers = {
  [LOGIN_SUCCEDED]: (state, action) => (
    {
        token: action.token,
        isFetching: false
    }),
  [LOGIN_REQUESTED]: (state, action) => (
    {
        isFetching: true
    }),
  [LOGIN_FAILED]: (state, action) => (
    {
        isFetching: false
    }),
}

export const auth = createReducer(initialState, actionHandlers)

