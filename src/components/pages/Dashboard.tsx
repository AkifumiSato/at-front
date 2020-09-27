import * as React from 'react'
import { Redirect } from 'react-router-dom'
import url from '../../config/url'
import { logout } from '../../lib/api/firebase'
import Dashboard from '../templates/Dashboard'

const DashboardPage: React.FC = () => {
  const [isLogout, setIsLogout] = React.useState(false)

  const onLogoutClick = React.useCallback(() => {
    logout()
      .then(() => setIsLogout(true))
      .catch((e) => console.log(e))
  }, [])

  if (isLogout) return <Redirect to={url.login} />

  return <Dashboard onLogoutClick={onLogoutClick} />
}

export default DashboardPage
