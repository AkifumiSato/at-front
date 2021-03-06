/** @jsx jsx */
import { SerializedStyles } from '@emotion/serialize'
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link, useHistory } from 'react-router-dom'
import Header from '../molecules/Header'

type Props = {
  next?: string
  prev?: string
  innerStyle?: SerializedStyles
}

const Layout: React.FC<Props> = ({ next, prev, innerStyle, children }) => {
  const history = useHistory()
  const wrapperDom = React.useRef<HTMLDivElement>(null)

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (next && e.key === 'ArrowRight') {
        history.push(next)
      }
      if (prev && e.key === 'ArrowLeft') {
        history.push(prev)
      }
    },
    [next, prev, history]
  )

  React.useEffect(() => {
    if (wrapperDom.current) wrapperDom.current.focus()
  }, [next, prev, history, wrapperDom])

  return (
    <>
      <Header />
      <div
        ref={wrapperDom}
        onKeyDown={onKeyDown}
        tabIndex={-1}
        css={css`
          min-height: 100vh;
          min-width: 100vw;
          padding: 75px 50px;
          position: relative;

          &:focus {
            outline: none;
          }
        `}
      >
        {prev && (
          <Link
            to={prev}
            css={css`
              position: absolute;
              top: 50%;
              left: 50px;
              transform: translateY(-50%);
              padding: 25px;
            `}
          >
            <img src="/assets/images/prev.svg" alt="prev" />
          </Link>
        )}
        <div
          css={css`
            padding: 0 100px;
            min-height: calc(100vh - 125px);
            width: 100%;
            ${innerStyle ? innerStyle : ''}
          `}
        >
          {children}
        </div>
        {next && (
          <Link
            to={next}
            css={css`
              position: absolute;
              top: 50%;
              right: 50px;
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
}

export default Layout
