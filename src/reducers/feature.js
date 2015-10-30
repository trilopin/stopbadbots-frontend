import { FEATURE_LIST_FETCHED, FEATURE_LIST_REQUESTED, FEATURE_LIST_FAILED } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  items: {},
  isFetching: false,
  currentInterval: null,
  lastUpdated: null,
}

const actionHandlers = {
  [FEATURE_LIST_FETCHED]: (state, action) => (
    {
      items: action.items,
      lastUpdated: Date.now(),
      isFetching: false
    }),
  [FEATURE_LIST_REQUESTED]: (state, action) => (
    {
      isFetching: true
    }),
  [FEATURE_LIST_FAILED]: (state, action) => (
    {
      isFetching: false
    }),
}

export const project = createReducer(initialState, actionHandlers)

