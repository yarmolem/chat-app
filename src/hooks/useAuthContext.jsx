import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthState'

const useAuthContext = () => {
  const {
    uid,
    name,
    email,
    online,
    isAuth,
    isLoading,
    loginAction,
    logoutAction
  } = useContext(AuthContext)

  return {
    uid,
    name,
    email,
    online,
    isAuth,
    isLoading,
    loginAction,
    logoutAction
  }
}

export default useAuthContext
