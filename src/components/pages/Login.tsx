/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { loginWithGoogle } from '../../lib/api/firebase'
import Button from '../atoms/Button'
import Layout from '../organisms/Layout'

const Login: React.FC = () => {
  const onLoginClick = React.useCallback(() => {
    loginWithGoogle().catch((err) => console.error(err))
  }, [])

  return (
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
}

export default Login
