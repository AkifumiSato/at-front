/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import Button from '../atoms/Button'
import Clock from '../atoms/Clock'
import Layout from '../organisms/Layout'

type Props = {
  isEnter: boolean
  onClick: () => void
}

const Dashboard: React.FC<Props> = ({ isEnter, onClick }) => (
  <Layout>
    <div
      css={css`
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
        margin-top: 75px;
      `}
    >
      <Button strong={true} width="200px" onClick={onClick}>
        {isEnter ? 'leave' : 'enter'}
      </Button>
    </div>
  </Layout>
)

export default Dashboard
