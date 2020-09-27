/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../config/url'
import Button from '../atoms/Button'
import Clock from '../atoms/Clock'
import Layout from '../organisms/Layout'

type Props = {
  onLogoutClick: () => void
}

const Dashboard: React.FC<Props> = ({ onLogoutClick }) => (
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
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          margin-top: 90px;
          display: grid;
          grid-template-columns: repeat(3, 200px);
          grid-column-gap: 100px;
        `}
      >
        <Button strong={true}>enter</Button>
        <Button strong={true}>leave</Button>
        <Button>list</Button>
      </div>
    </div>
    <div
      css={css`
        padding: 32px;
        font-size: 24px;
        font-weight: bold;
      `}
    >
      Dashboard
    </div>
    <div>
      <Link to={url.login}>login</Link>
    </div>
    <div>
      <button onClick={onLogoutClick}>logout</button>
    </div>
  </Layout>
)

export default Dashboard
