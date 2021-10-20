import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../components/Layout'

import Loading from '../components/Loading'

const HomePage = lazy(() => import('../pages/HomePage'))

const HomeRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Redirect from="/auth/login" to="/" />
        </Switch>
      </Layout>
    </Suspense>
  )
}

export default HomeRoutes
