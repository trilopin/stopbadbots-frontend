import 'whatwg-fetch'
import { SBB_APIURL, SBB_APIAUTH } from  '../config.js'
import { PROJECT_LIST_FETCHED } from '../constants.jsx'


export function fetchProjects (parameters) {
  const { token } = parameters
  return dispatch => {
    // TODO: handle errors
    fetch(`${SBB_APIURL}/v1/project/`, {
      headers: {
        'Authorization': token
      }
    })
    .then(res => res.json())
    .then(res => dispatch({
      type: PROJECT_LIST_FETCHED,
      items: res
    }))
  }
}

