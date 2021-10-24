import { useReducer, createContext } from 'react'

import AuthReducer from './AuthReducer'
import { authActions } from './AuthActions'

export interface AuthStateValue {
  uid: string
  name: string
  email: string
  online: boolean
  isAuth: boolean
  isLoading: boolean
}

export interface AuthStateActions extends AuthStateValue {
  loginAction?: void
  logoutAction?: void
}

export const initialState: AuthStateValue = {
  uid: '',
  name: '',
  email: '',
  online: false,
  isAuth: false,
  isLoading: false
}

export const AuthContext = createContext<AuthStateActions>({})

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const actions = authActions(state, dispatch)

  return (
    <AuthContext.Provider
      value={{
        ...state,
        ...actions
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
