/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'

const Layout: React.FC = ({ children }) => (
  <div
    css={css`
      background-color: ${color.blue['100']};
      min-height: 100vh;
      min-width: 100vw;
      box-sizing: border-box;
    `}
  >
    {children}
  </div>
)

export default Layout
