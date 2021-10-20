import { initialState } from './AuthState'
import { authTypes as types } from './authTypes'

export const authActions = (state = initialState, dispatch) => {
  const loginAction = (user, token) => {
    localStorage.setItem('token', token)
    dispatch({ type: types.LOGIN, payload: user })
  }

  const logoutAction = () => {
    localStorage.removeItem('token')
    dispatch({ type: types.LOGOUT })
  }

  return {
    loginAction,
    logoutAction
  }
}
