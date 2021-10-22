import { useContext } from 'react'
import { AuthContext, AuthContextProps } from '../context/auth/AuthState'

const useAuthContext = () => {
  const context: AuthContextProps = useContext(AuthContext)

  return { ...context }
}

export default useAuthContext
