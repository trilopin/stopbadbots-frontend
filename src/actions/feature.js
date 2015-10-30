import 'whatwg-fetch'
import { SBB_APIURL, SBB_APIAUTH } from  '../config'
import { FEATURE_LIST_FETCHED } from '../constants'


export function fetchFeatures (parameters) {
  const { token, project } = parameters
  return dispatch => {
    // TODO: handle errors
    fetch(`${SBB_APIURL}/v1/project/${project}/feature`, {
      headers: {
        'Authorization': token
      }
    })
    .then(res => res.json())
    .then(res => dispatch({
      type: FEATURE_LIST_FETCHED,
      items: res
    }))
  }
}

