/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../../config/url'
import Logo from '../../atoms/Logo'

type Props = {
  onLogoutClick: () => void
}

const Layout: React.FC<Props> = ({ onLogoutClick, children }) => (
  <>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        width: 100vw;
        padding: 25px;
      `}
    >
      <Logo />
      <div>
        <Link to={url.login}>login</Link>
        <button onClick={onLogoutClick}>logout</button>
      </div>
    </div>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vw;
        padding: 75px 50px;
      `}
    >
      <div>{children}</div>
    </div>
  </>
)

export default Layout
