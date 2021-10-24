import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../components/Layout'

import Loading from '../components/Loading'

const HomePage = lazy(() => import('../pages/HomePage'))
const HallPage = lazy(() => import('../pages/HallPage'))

const HomeRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hall/:uid" component={HallPage} />

          <Redirect from="/auth/login" to="/" />
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default HomeRoutes
