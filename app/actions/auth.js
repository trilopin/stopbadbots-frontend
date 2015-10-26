import 'whatwg-fetch'
import { SBB_APIURL, SBB_APIAUTH } from  '../config'
import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGIN_REQUESTED } from '../constants'
import { fetchProjects } from './project'

export function login (parameters) {
  const { name, password } = parameters
  return dispatch => {
    dispatch( { type: LOGIN_REQUESTED } );
    fetch(`${SBB_APIURL}/v1/auth/`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password,
      })
    })
    .then(res => res.json())
    .then(res => {
      dispatch( { type: LOGIN_SUCCEDED,token: res.auth_token } )
      dispatch( fetchProjects({ token: res.auth_token }) )
    })
  }
}

