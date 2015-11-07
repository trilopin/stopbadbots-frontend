import { APP_SIDEBAR_TOOGLE } from '../constants'
import createReducer from '../util/create-reducer'

const initialState = {
  sidebarForceOpened: false,
}

const actionHandlers = {
  [APP_SIDEBAR_TOOGLE]: (state, action) => (
    {
      sidebarForceOpened: !state.sidebarForceOpened
    }),
}

export const app = createReducer(initialState, actionHandlers)

