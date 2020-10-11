/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import Header from '../../molecules/Header'

type Props = {
  onLogoutClick: () => void
  next?: string
  prev?: string
}

const Layout: React.FC<Props> = ({ onLogoutClick, next, prev, children }) => (
  <>
    <Header onLogoutClick={onLogoutClick} />
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vw;
        padding: 75px 50px;
        position: relative;
      `}
    >
      {prev && (
        <Link
          to={prev}
          css={css`
            position: absolute;
            top: 50%;
            left: 75px;
            transform: translateY(-50%);
            padding: 25px;
          `}
        >
          <img src="/assets/images/prev.svg" alt="prev" />
        </Link>
      )}
      <div>{children}</div>
      {next && (
        <Link
          to={next}
          css={css`
            position: absolute;
            top: 50%;
            right: 75px;
            transform: translateY(-50%);
            padding: 25px;
          `}
        >
          <img src="/assets/images/next.svg" alt="next" />
        </Link>
      )}
    </div>
  </>
)

export default Layout
