/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import url from '../../config/url'
import RecordTable from '../molecules/RecordTable'
import Layout from '../organisms/Layout'

// todo テストデータを返却するPromiseを作成し、recoilでfetchするところまで実装
// todo editなど作成

const List: React.FC = () => (
  <Layout
    prev={url.dashboard.root}
    innerStyle={css`
      margin-top: 75px;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <RecordTable />
    </div>
  </Layout>
)

export default List
