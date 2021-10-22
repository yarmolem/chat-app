import { useReducer, createContext } from 'react'

import AuthReducer from './AuthReducer'
import { authActions } from './AuthActions'

export interface Auth {
  uid: string
  name: string
  email: string
  online: boolean
  isAuth: boolean
  isLoading: boolean
}

export interface AuthContextProps extends Auth {
  loginAction: void
  logoutAction: void
}

export const AuthContext = createContext<AuthContextProps>({})

export const initialState: Auth = {
  uid: '',
  name: '',
  email: '',
  online: false,
  isAuth: false,
  isLoading: false
}

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
