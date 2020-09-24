/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../config/url'
import Layout from '../organisms/Layout'

type Props = {
  title: string
}

const Dashboard: React.FC<Props> = ({ title }) => (
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
    <Link to={url.login}>login</Link>
  </Layout>
)

export default Dashboard
