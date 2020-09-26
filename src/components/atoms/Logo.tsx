/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'

const Logo: React.FC = () => (
  <img
    src="/assets/images/logo.svg"
    alt="AT"
    css={css`
      display: block;
    `}
  />
)

export default Logo
