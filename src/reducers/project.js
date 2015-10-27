import { PROJECT_LIST_FETCHED, PROJECT_LIST_REQUESTED, PROJECT_LIST_FAILED } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  items: {},
  isFetching: false,
  currentProject: null,
  lastUpdated: null,
}

const actionHandlers = {
  [PROJECT_LIST_FETCHED]: (state, action) => (
    {
      items: action.items,
      lastUpdated: Date.now(),
      isFetching: false
    }),
  [PROJECT_LIST_REQUESTED]: (state, action) => (
    {
      isFetching: true
    }),
  [PROJECT_LIST_FAILED]: (state, action) => (
    {
      isFetching: false
    }),
}

export const project = createReducer(initialState, actionHandlers)

