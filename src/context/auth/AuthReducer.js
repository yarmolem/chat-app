import { initialState } from './AuthState'
import { authTypes as types } from './AuthTypes'

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        ...payload,
        isAuth: true
      }

    case types.LOGOUT:
      return initialState

    default:
      return state
  }
}

export default AuthReducer
