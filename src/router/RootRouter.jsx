import { useEffect } from 'react'

import HomeRoutes from './HomeRoutes'
import AuthRoutes from './AuthRoutes'
import Loading from '../components/Loading'
import useAuthContext from '../hooks/useAuthContext'
import useFetchLazyQuery from '../hooks/useFetchLazyQuery'

const RootRouter = () => {
  const { isAuth, loginAction, logoutAction } = useAuthContext()
  const [renewSession, { loading }] = useFetchLazyQuery({ path: '/auth' })

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

  if (loading) return <Loading />

  return <div>{isAuth ? <HomeRoutes /> : <AuthRoutes />}</div>
}

export default RootRouter
