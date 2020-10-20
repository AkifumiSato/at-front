/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { useRecoilValue } from 'recoil'
import { attendanceCalculatedTableState } from '../../recoil/selectors'
import { color } from '../../stylesheets/color'
import { ErrorBoundary } from '../atoms/ErrorBoundary'
import Loader from '../atoms/Loader'

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

type ButtonProps = {
  textColor: string
}

const Button: React.FC<ButtonProps> = ({ textColor, children }) => (
  <button
    css={css`
      border-radius: 5px;
      color: ${textColor};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      padding-top: 4px;
      width: 80px;
      transition: box-shadow 0.5s;

      &:hover {
        box-shadow: inset ${color.gray['300']} 2px 2px 5px,
          inset ${color.white} -2px -2px 5px;
      }
    `}
  >
    {children}
  </button>
)

const RecordDetail: React.FC = () => {
  const columns = useRecoilValue(attendanceCalculatedTableState)

  return (
    <tbody>
      {columns.map((column, i) => (
        <tr
          key={i}
          css={css`
            &:not(:last-child) {
              border-bottom: 1px solid ${color.gray['200']};
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
          <td
            css={css`
              font-size: 18px;
              vertical-align: middle;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-around;
                width: 200px;
              `}
            >
              <Button textColor={color.green['300']}>edit</Button>
              <Button textColor={color.orange['200']}>delete</Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const RecordTable: React.FC = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<Loader />}>
      <table
        css={css`
          border-radius: 10px;
          box-shadow: inset ${color.gray['300']} 5px 5px 10px,
            inset ${color.white} -5px -5px 10px;
          table-layout: fixed;
          width: 80%;
          min-width: 800px;
          max-width: 1000px;
        `}
      >
        <colgroup>
          <col width="19%" />
          <col width="14%" />
          <col width="14%" />
          <col width="14%" />
          <col width="14%" />
          <col width="25%" />
        </colgroup>
        <thead>
          <tr
            css={css`
              border-bottom: 1px solid ${color.gray['200']};
            `}
          >
            <Title>date</Title>
            <Title>start</Title>
            <Title>end</Title>
            <Title>break</Title>
            <Title>sum</Title>
            <Title>menu</Title>
          </tr>
        </thead>
        <RecordDetail />
      </table>
    </React.Suspense>
  </ErrorBoundary>
)

export default React.memo(RecordTable)
