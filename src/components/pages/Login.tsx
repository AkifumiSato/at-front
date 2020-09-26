/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../config/url'
import { color } from '../../stylesheets/color'
import Layout from '../organisms/Layout'

const Login: React.FC = () => (
  <Layout>
    <div
      css={css`
        font-size: 24px;
        margin-top: 200px;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: 30px;
          text-align: center;
        `}
      >
        <h1
          css={css`
            font-size: 30px;
            font-weight: bold;
          `}
        >
          Sign In/Sing Up
        </h1>
        <p
          css={css`
            font-size: 18px;
          `}
        >
          Please login with Google account.
        </p>
        <Link to={url.dashboard.root}>
          <div
            css={css`
              border: 1px solid ${color.blue['200']};
              box-shadow: ${color.blue['300']} 12px 12px 36px,
                ${color.white} -12px -12px 36px;
              border-radius: 10px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
            `}
          >
            Login
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Login
