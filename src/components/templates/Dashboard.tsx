/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import Button from '../atoms/Button'
import Clock from '../atoms/Clock'
import Layout from '../organisms/Layout'

const Dashboard: React.FC = () => (
  <Layout>
    <div
      css={css`
        display: flex;
        justify-content: center;
src/components/templates/Login.tsx:12:4
src/components/templates/Login.tsx:12:4`}
    >
      <Clock />
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-top: 75px;
      `}
    >
      <Button strong={true} width="200px">
        enter
      </Button>
    </div>
  </Layout>
)

export default Dashboard
