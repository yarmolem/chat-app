import { useReducer, createContext } from 'react'

import AuthReducer from './AuthReducer'
import { authActions } from './AuthActions'

export const AuthContext = createContext()

export const initialState = {
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
