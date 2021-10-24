import { useContext } from 'react'
import { AuthContext, AuthStateActions } from '../context/auth/AuthState'

const useAuthContext = () => {
  const context: AuthStateActions = useContext(AuthContext)
  return { ...context }
}

export default useAuthContext
