import * as React from 'react'
import { loginWithGoogle } from '../../lib/api/firebase'
import Login from '../templates/Login'

const LoginPage: React.FC = () => {
  const onLoginClick = React.useCallback(() => {
    loginWithGoogle().catch((err) => console.error(err))
  }, [])

  return <Login onLoginClick={onLoginClick} />
}

export default LoginPage
