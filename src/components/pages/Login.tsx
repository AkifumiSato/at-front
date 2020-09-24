/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../config/url'
import Layout from '../organisms/Layout'

type Props = {
  title: string
}

const Login: React.FC<Props> = ({ title }) => (
  <Layout>
    <div
      css={css`
        padding: 32px;
        font-size: 24px;
        font-weight: bold;
      `}
    >
      {title}
    </div>
    <Link to={url.dashboard.root}>dashboard</Link>
  </Layout>
)

export default Login
