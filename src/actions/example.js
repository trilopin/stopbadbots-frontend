import 'whatwg-fetch'
import { SBB_APIURL, SBB_APIAUTH } from  '../config'
import { EXAMPLE_LIST_FETCHED } from '../constants'


export function fetchExamples (parameters) {
  const { token, project, interval, offset, pageSize } = parameters
  return dispatch => {
    // TODO make query string
    fetch(`${SBB_APIURL}/v1/project/${project}/example`, {
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

