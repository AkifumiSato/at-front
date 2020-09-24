/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'

type Props = {
  title: string
}

const App: React.FC<Props> = ({ title }) => (
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
)

export default App
