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

const RecordDetail: React.FC = () => {
  const columns = useRecoilValue(attendanceCalculatedTableState)

  return (
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
          <td
            css={css`
              padding: 20px 30px;
              font-size: 18px;
            `}
          >
            <div
              css={css`
                display: flex;
              `}
            >
              <button>edit</button>
              <button
                css={css`
                  margin-left: 30px;
                `}
              >
                delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const RecordTable: React.FC = () => (
  <ErrorBoundary
    fallback={
      <p>
        エラーが発生しました。
        <br />
        リロードするか時間を置いてから再度アクセスしてください。
      </p>
    }
  >
    <React.Suspense fallback={<Loader />}>
      <table
        css={css`
          border-radius: 10px;
          box-shadow: inset ${color.blue['300']} 5px 5px 10px,
            inset ${color.white} -5px -5px 10px;
          width: 50%;
        `}
      >
        <colgroup>
          <col width="18%" />
          <col width="13%" />
          <col width="13%" />
          <col width="13%" />
          <col width="13%" />
          <col width="30%" />
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
            <Title>menu</Title>
          </tr>
        </thead>
        <RecordDetail />
      </table>
    </React.Suspense>
  </ErrorBoundary>
)

export default React.memo(RecordTable)
