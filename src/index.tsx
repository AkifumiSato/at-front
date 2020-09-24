import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login" exact>
        <Login title="Login" />
      </Route>
      <Route path="/dashboard">
        <Dashboard title="Dashboard" />
      </Route>
      <Route path="" exact>
        <p>Not found</p>
        <Link to="/login">login</Link>
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
