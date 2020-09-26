/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'
import Logo from '../atoms/Logo'

const Layout: React.FC = ({ children }) => (
  <div
    css={css`
      background-color: ${color.blue['100']};
      min-height: 100vh;
      min-width: 100vw;
      box-sizing: border-box;
      padding: 50px;
    `}
  >
    <Logo />
    <div
      css={css`
        margin-top: 30px;
      `}
    >
      {children}
    </div>
  </div>
)

export default Layout
