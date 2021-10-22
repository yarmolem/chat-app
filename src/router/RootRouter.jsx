import { useEffect } from 'react'

import HomeRoutes from './HomeRoutes'
import AuthRoutes from './AuthRoutes'
import useAuthContext from '../hooks/useAuthContext'
import useFetchLazyQuery from '../hooks/useFetchLazyQuery'

const RootRouter = () => {
  const [renewSession] = useFetchLazyQuery({ path: '/auth' })
  const { isAuth, loginAction, logoutAction } = useAuthContext()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      renewSession().then((data) => {
        if (!data.ok) {
          logoutAction()
          return console.log('ERROR AL RENOVAR TOKEN')
        }

        const { user, token: newToken } = data
        loginAction(user, newToken)
      })
    }
  }, [])

  return <div>{isAuth ? <HomeRoutes /> : <AuthRoutes />}</div>
}

export default RootRouter
