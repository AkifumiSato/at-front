/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import url from '../../config/url'
import RecordTable from '../molecules/RecordTable'
import Layout from '../organisms/Layout'

type Record = {
  start: Date
  end: Date
  break: number
}

const records: Record[] = [
  {
    start: new Date('2020/10/01 10:12'),
    end: new Date('2020/10/01 19:34'),
    break: 3600000,
  },
  {
    start: new Date('2020/10/01 10:12'),
    end: new Date('2020/10/01 19:34'),
    break: 3600000,
  },
  {
    start: new Date('2020/10/01 10:12'),
    end: new Date('2020/10/01 19:34'),
    break: 3600000,
  },
]

// todo テストデータを返却するPromiseを作成し、recoilで再実装

const List: React.FC = () => (
  <Layout prev={url.dashboard.root}>
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <RecordTable records={records} />
    </div>
  </Layout>
)

export default List
