import {
  LOGIN,
  LOGIN_OK,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/types'

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  token: undefined,
  userData: {}
}

export default (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
    case LOGIN:
      return {
        ...state,
        loading: true
      }
    case LOGIN_OK:
      const token = payload.data.message
      const userData = JSON.parse(window.atob(token.split('.')[1]))
      return {
        ...state,
        loading: false,
        userData,
        token,
        loggedIn: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}
