import {
  LOGIN,
  LOGOUT
} from './types'

export const logIn = ({ username, password }) => ({
  type: LOGIN,
  params: { username, password },
  request: {
    url: 'api/users/login',
    method: 'POST'
  }
})

export const logOut = () => ({
  type: LOGOUT
})
