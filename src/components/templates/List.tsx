/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { format, startOfToday } from 'date-fns'
import url from '../../config/url'
import Table from '../molecules/Table'
import Layout from '../organisms/Layout'

const titles = ['date', 'start', 'end', 'break', 'sum']

type Record = {
  start: Date
  end: Date
  break: number
}

const apiRecords: Record[] = [
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

const recordFormat = (record: Record) => [
  format(record.start, 'yyyy/MM/dd'),
  format(record.start, 'HH:mm'),
  format(record.end, 'HH:mm'),
  format(startOfToday().getTime() + record.break, 'HH:mm'),
  format(record.end.getTime() - record.start.getTime(), 'HH:mm'),
]

const columns = apiRecords.map(recordFormat)

const widths = ['28%', '18%', '18%', '18%']

const List: React.FC = () => (
  <Layout prev={url.dashboard.root}>
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Table titles={titles} columns={columns} widths={widths} />
    </div>
  </Layout>
)

export default List
