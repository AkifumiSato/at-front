/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { useRecoilValue } from 'recoil'
import { attendanceCalculatedTableState } from '../../recoil/selectors'
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

const RecordTable: React.FC = () => {
  const columns = useRecoilValue(attendanceCalculatedTableState)

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
