import { PROJECT_LIST_FETCHED, PROJECT_LIST_REQUESTED, PROJECT_LIST_FAILED } from '../constants.jsx'
import createReducer from '../util/create-reducer.jsx'

const initialState = {
  projects: {
    items: {},
    isFetching: false,
    lastUpdated: null
  }
}

const actionHandlers = {
  [PROJECT_LIST_FETCHED]: (state, action) => (
    {
      projects: Object.assign({}, state.projects, {
        items: action.items,
        lastUpdated: Date.now()
      })
    }),
  [PROJECT_LIST_REQUESTED]: (state, action) => (
    {
      projects: Object.assign({}, state.projects, {
        isFetching: true
      })
    }),
}

export const project = createReducer(initialState, actionHandlers)

