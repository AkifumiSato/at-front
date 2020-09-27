/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'

const Clock: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${color.blue['200']};
        box-shadow: ${color.blue['300']} 20px 20px 50px,
          ${color.white} -20px -20px 50px;
        border-radius: 50%;
        height: 500px;
        width: 500px;
        font-size: 120px;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 150px 50px 150px;
          text-align: center;
        `}
      >
        <span>12</span>
        <span>:</span>
        <span>20</span>
      </div>
    </div>
  )
}

export default Clock
