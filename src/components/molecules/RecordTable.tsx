/** @jsx jsx */
import { format, startOfToday } from 'date-fns'
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'

const Title: React.FC = ({ children }) => (
  <th
    css={css`
      padding: 20px 30px;
      font-size: 20px;
    `}
  >
    {children}
  </th>
)

const recordFormat = (record: Record) => [
  format(record.start, 'yyyy/MM/dd'),
  format(record.start, 'HH:mm'),
  format(record.end, 'HH:mm'),
  format(startOfToday().getTime() + record.break, 'HH:mm'),
  format(record.end.getTime() - record.start.getTime(), 'HH:mm'),
]

type Record = {
  start: Date
  end: Date
  break: number
}

type Props = {
  records: Record[]
}

const RecordTable: React.FC<Props> = ({ records }) => {
  const columns = records.map(recordFormat)

  return (
    <table
      css={css`
        border-radius: 10px;
        box-shadow: inset ${color.blue['300']} 5px 5px 10px,
          inset ${color.white} -5px -5px 10px;
        width: 50%;
      `}
    >
      <colgroup>
        <col width="28%" />
        <col width="18%" />
        <col width="18%" />
        <col width="18%" />
        <col width="18%" />
      </colgroup>
      <thead>
        <tr
          css={css`
            border-bottom: 1px solid ${color.blue['200']};
          `}
        >
          <Title>date</Title>
          <Title>start</Title>
          <Title>end</Title>
          <Title>break</Title>
          <Title>sum</Title>
        </tr>
      </thead>
      <tbody>
        {columns.map((column, i) => (
          <tr
            key={i}
            css={css`
              &:not(:last-child) {
                border-bottom: 1px solid ${color.blue['200']};
              }
            `}
          >
            {column.map((item, i) => (
              <td
                key={i}
                css={css`
                  padding: 20px 30px;
                  font-size: 18px;
                `}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default React.memo(RecordTable)
