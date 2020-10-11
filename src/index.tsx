import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import List from './components/pages/List'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import url from './config/url'
import { getUser } from './lib/api/firebase'

const useAuth = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isLogin, setIsLogin] = React.useState(false)

  React.useEffect(() => {
    getUser()
      .then(() => setIsLogin(true))
      .catch(() => false)
      .finally(() => setIsLoading(false))
  })

  return [isLoading, isLogin]
}

const LoginCheck: React.FC = ({ children }) => {
  const [isLoading, isLogin] = useAuth()

  if (isLoading) return <>loading...</>
  if (isLogin) return <Redirect to={url.dashboard.root} />

  return <>{children}</>
}

const PrivateWrapper: React.FC = ({ children }) => {
  const [isLoading, isLogin] = useAuth()

  if (isLoading) return <>loading...</>
  if (isLogin) return <>{children}</>

  return <Redirect to={url.login} />
}

const App: React.FC = () => (
  <RecoilRoot>
    <Router>
      <Switch>
        <Route path={url.login} exact>
          <LoginCheck>
            <Login />
          </LoginCheck>
        </Route>
        <Route path={url.dashboard.root} exact>
          <PrivateWrapper>
            <Dashboard />
          </PrivateWrapper>
        </Route>
        <Route path={url.list} exact>
          <PrivateWrapper>
            <List />
          </PrivateWrapper>
        </Route>
        <Route>
          <p>Not Found...</p>
        </Route>
      </Switch>
    </Router>
  </RecoilRoot>
)

ReactDOM.render(<App />, document.getElementById('root'))
