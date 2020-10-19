/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Redirect } from 'react-router-dom'
import url from '../../config/url'
import { logout } from '../../lib/api/firebase'
import Logo from '../atoms/Logo'

const menuStyle = css`
  display: flex;
  padding: 10px;
  font-size: 20px;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.5;
  }
`

const Header: React.FC = () => {
  const [isLogoutComplete, setIsLogoutComplete] = React.useState(false)

  const onLogoutClick = () =>
    logout()
      .then(() => setIsLogoutComplete(true))
      .catch((e) => console.log(e))

  if (isLogoutComplete) return <Redirect to={url.login} />

  return (
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
        z-index: 1;
      `}
    >
      <Logo />
      <button
        onClick={onLogoutClick}
        css={css`
          ${menuStyle};
        `}
      >
        logout
      </button>
    </div>
  )
}

export default React.memo(Header)
