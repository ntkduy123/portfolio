import { store } from '../boot/configureStore'

export const isLogin = () => {
  const user = store.getState().user
  const {
    loggedIn,
    userData
  } = user

  if (loggedIn && userData) {
    const now = Math.floor(Date.now() / 1000)
    return now < userData.exp
  }

  return false
}

export const createToken = () => {
  const token = store.getState().user.token
  return token ? `${token}` : ''
}
