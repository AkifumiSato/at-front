/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../../config/url'
import Logo from '../../atoms/Logo'

const menuStyle = css`
  display: flex;
  padding: 10px;
  font-size: 20px;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.5;
  }
`

type Props = {
  onLogoutClick: () => void
}

const Layout: React.FC<Props> = ({ onLogoutClick, children }) => (
  <>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        height: 75px;
        width: 100vw;
        padding: 0 25px;
      `}
    >
      <Logo />
      <div
        css={css`
          display: flex;
        `}
      >
        <Link
          to={url.login}
          css={css`
            ${menuStyle};
          `}
        >
          login
        </Link>
        <button
          onClick={onLogoutClick}
          css={css`
            ${menuStyle};
            margin-left: 30px;
          `}
        >
          logout
        </button>
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
