/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

type Props = {
  title: string
}

const Dashboard: React.FC<Props> = ({ title }) => (
  <>
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        font-weight: bold;
      `}
    >
      {title}
    </div>
    <Link to="/">login</Link>
  </>
)

export default Dashboard
