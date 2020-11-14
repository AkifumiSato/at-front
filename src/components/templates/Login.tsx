/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'
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
        <div
          css={css`
            color: ${color.navy['300']};
            font-size: 14px;
            line-height: 1.5;
            margin-top: 20px;
            width: 500px;
          `}
        >
          本サイトは現在開発中の、個人利用を目的としたアルファ版です。
          <br />
          利用に際しては利用者が一切の責任を負うこととします。
        </div>
      </div>
    </div>
  </Layout>
)

export default Login
