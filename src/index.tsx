import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { ErrorBoundary } from './components/atoms/ErrorBoundary'
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
import { isUserLoginState } from './recoil/selectors'

const NotLoginCheck: React.FC = ({ children }) => {
  const isLogin = useRecoilValue(isUserLoginState)
  if (isLogin) return <Redirect to={url.dashboard.root} />

  return <>{children}</>
}

const LoginCheck: React.FC = ({ children }) => {
  const isLogin = useRecoilValue(isUserLoginState)
  if (!isLogin) return <Redirect to={url.login} />

  return <>{children}</>
}

// todo to atoms
const LoadingSuspense: React.FC = ({ children }) => (
  <ErrorBoundary
    fallback={
      <p>
        エラーが発生しました。
        <br />
        リロードするか時間を置いてから再度アクセスしてください。
      </p>
    }
  >
    <React.Suspense fallback={<>loading...</>}>{children}</React.Suspense>
  </ErrorBoundary>
)

const App: React.FC = () => (
  <RecoilRoot>
    <Router>
      <Switch>
        <Route path={url.login} exact>
          <LoadingSuspense>
            <NotLoginCheck>
              <Login />
            </NotLoginCheck>
          </LoadingSuspense>
        </Route>
        <Route path={url.dashboard.root} exact>
          <LoadingSuspense>
            <LoginCheck>
              <Dashboard />
            </LoginCheck>
          </LoadingSuspense>
        </Route>
        <Route path={url.list} exact>
          <LoadingSuspense>
            <LoginCheck>
              <List />
            </LoginCheck>
          </LoadingSuspense>
        </Route>
        <Route>
          <p>Not Found...</p>
        </Route>
      </Switch>
    </Router>
  </RecoilRoot>
)

ReactDOM.render(<App />, document.getElementById('root'))
