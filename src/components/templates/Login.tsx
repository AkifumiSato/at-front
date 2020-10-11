/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import Button from '../atoms/Button'
import Layout from '../organisms/Layout'

type Props = {
  onLoginClick: () => void
}

const Login: React.FC<Props> = ({ onLoginClick }) => (
  <Layout>
    <div
      css={css`
        font-size: 24px;
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
          padding-bottom: 100px;
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
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <Button
            onClick={onLoginClick}
            width="250px"
            icon="/assets/images/google.png"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default Login
