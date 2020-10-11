import * as React from 'react'
import { Redirect } from 'react-router-dom'
import url from '../../../config/url'
import { logout } from '../../../lib/api/firebase'
import Layout from './Layout'

type Props = {
  next?: string
  prev?: string
}

const LayoutContainer: React.FC<Props> = (props) => {
  const [isLogout, setIsLogout] = React.useState(false)

  const onLogoutClick = React.useCallback(() => {
    logout()
      .then(() => setIsLogout(true))
      .catch((e) => console.log(e))
  }, [])

  if (isLogout) return <Redirect to={url.login} />

  return <Layout onLogoutClick={onLogoutClick} {...props} />
}

export default LayoutContainer
