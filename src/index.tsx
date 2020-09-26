import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import url from './config/url'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path={url.login} exact>
        <Login />
      </Route>
      <Route path={url.dashboard.root} exact>
        <Dashboard title="Dashboard" />
      </Route>
      <Route>
        <p>Not found</p>
        <Link to="/login">login</Link>
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
