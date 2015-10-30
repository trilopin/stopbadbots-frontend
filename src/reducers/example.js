import { EXAMPLE_LIST_FETCHED, EXAMPLE_LIST_REQUESTED, EXAMPLE_LIST_FAILED } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  items: {},
  isFetching: false,
  currentInterval: null,
  lastUpdated: null,
}

const actionHandlers = {
  [EXAMPLE_LIST_FETCHED]: (state, action) => (
    {
      items: action.items,
      lastUpdated: Date.now(),
      isFetching: false
    }),
  [EXAMPLE_LIST_REQUESTED]: (state, action) => (
    {
      isFetching: true
    }),
  [EXAMPLE_LIST_FAILED]: (state, action) => (
    {
      isFetching: false
    }),
}

export const project = createReducer(initialState, actionHandlers)

