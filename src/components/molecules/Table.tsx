/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'

type Props = {
  titles: string[]
  columns: string[][]
  widths: string[]
}

const Table: React.FC<Props> = ({ titles, columns, widths }) => (
  <table
    css={css`
      border-radius: 10px;
      box-shadow: inset ${color.blue['300']} 5px 5px 10px,
        inset ${color.white} -5px -5px 10px;
      width: 50%;
    `}
  >
    <colgroup>
      {widths.map((width, i) => (
        <col key={i} width={width} />
      ))}
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, i) => (
          <th
            key={i}
            css={css`
              padding: 20px;
              font-size: 20px;
            `}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {columns.map((column, i) => (
        <tr key={i}>
          {column.map((item, i) => (
            <td
              key={i}
              css={css`
                padding: 20px;
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

export default React.memo(Table)
