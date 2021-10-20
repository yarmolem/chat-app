import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Loading from '../components/Loading'

const LoginPage = lazy(() => import('../pages/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))

const AuthRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />

        <Redirect from="/" to="/auth/login" />
      </Switch>
    </Suspense>
  )
}

export default AuthRoutes
