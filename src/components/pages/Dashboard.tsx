/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link, Redirect } from 'react-router-dom'
import url from '../../config/url'
import { logout } from '../../lib/api/firebase'
import Clock from '../atoms/Clock'
import Layout from '../organisms/Layout'

type Props = {
  title: string
}

const Dashboard: React.FC<Props> = ({ title }) => {
  const [isLogout, setIsLogout] = React.useState(false)

  const onLogoutClick = React.useCallback(() => {
    logout()
      .then(() => setIsLogout(true))
      .catch((e) => console.log(e))
  }, [])

  if (isLogout) return <Redirect to={url.login} />

  return (
    <Layout>
      <div
        css={css`
          margin-top: 30px;
          display: flex;
          justify-content: center;
        `}
      >
        <Clock />
      </div>
      <div
        css={css`
          padding: 32px;
          font-size: 24px;
          font-weight: bold;
        `}
      >
        {title}
      </div>
      <div>
        <Link to={url.login}>login</Link>
      </div>
      <div>
        <button onClick={onLogoutClick}>logout</button>
      </div>
    </Layout>
  )
}

export default Dashboard
