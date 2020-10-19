/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isUserWantLogoutState } from '../../recoil/atoms'
import { isUserLoginState } from '../../recoil/selectors'
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
  const isLogin = useRecoilValue(isUserLoginState)
  const setUserWantLogout = useSetRecoilState(isUserWantLogoutState)

  const onLogoutClick = () => setUserWantLogout(true)

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
      {isLogin && (
        <button
          onClick={onLogoutClick}
          css={css`
            ${menuStyle};
          `}
        >
          logout
        </button>
      )}
    </div>
  )
}

export default React.memo(Header)
