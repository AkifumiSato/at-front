/** @jsx jsx */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { portalDom } from '../../lib/dom/portal'
import { rgba } from '../../stylesheets/color'

const Loader: React.FC = () =>
  ReactDOM.createPortal(
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        background-color: ${rgba.overlay};
        font-size: 20px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      `}
    >
      ...loading
    </div>,
    portalDom
  )

export default Loader
