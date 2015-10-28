import 'whatwg-fetch'
import { pushState } from 'redux-router'
import { SBB_APIURL, SBB_APIAUTH } from  '../config'
import { LOGIN_SUCCEDED, LOGIN_FAILED, LOGIN_REQUESTED, LOGOUT_REQUESTED } from '../constants'
import { fetchProjects } from './project'

export function login (parameters) {
  const { name, password, redirect } = parameters
  return dispatch => {
    dispatch( { type: LOGIN_REQUESTED, username: name } );
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
      dispatch( { type: LOGIN_SUCCEDED, token: res.auth_token } )
      dispatch( fetchProjects({ token: res.auth_token }) )
      redirect()
    })
  }
}

export function logout (parameters) {
  const { redirect } = parameters
  return dispatch => {
    dispatch( { type: LOGOUT_REQUESTED } );
    redirect()
  }
}