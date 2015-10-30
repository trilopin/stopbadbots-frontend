import {
  LOGIN_SUCCEDED,
  LOGIN_FAILED,
  LOGIN_REQUESTED,
  LOGOUT_REQUESTED } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  token: null,
  username: null,
  failed: false,
  isFetching: false
}

const actionHandlers = {
  [LOGIN_SUCCEDED]: (state, action) => (
    {
        token: action.token,
        isFetching: false,
        failed: false
    }),
  [LOGIN_REQUESTED]: (state, action) => (
    {
        isFetching: true,
        failed: false,
        username: action.username
    }),
  [LOGIN_FAILED]: (state, action) => (
    {
        isFetching: false,
        username: null,
        failed: true
    }),
  [LOGOUT_REQUESTED]: (state, action) => (
    {
        isFetching: false,
        username: null,
        token: null
    }),
}

export const auth = createReducer(initialState, actionHandlers)

