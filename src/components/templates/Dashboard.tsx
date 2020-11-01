/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import url from '../../config/url'
import Button from '../atoms/Button'
import Clock from '../atoms/Clock'
import Loader from '../atoms/Loader'
import Layout from '../organisms/Layout'

type Props = {
  isEnter: boolean
  loading: boolean
  onClick: () => void
}

const Dashboard: React.FC<Props> = ({ isEnter, loading, onClick }) => (
  <>
    {loading && <Loader />}
    <Layout next={url.list}>
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
  </>
)

export default Dashboard
