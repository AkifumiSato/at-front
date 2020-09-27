/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import url from '../../config/url'

const Logo: React.FC = () => (
  <Link to={url.dashboard.root}>
    <img
      src="/assets/images/logo.svg"
      alt="AT"
      css={css`
        display: block;
      `}
    />
  </Link>
)

export default Logo
