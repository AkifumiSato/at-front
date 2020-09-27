/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import { color } from '../../stylesheets/color'

const buttonStyle = css`
  box-shadow: ${color.blue['300']} 15px 15px 30px,
    ${color.white} -15px -15px 30px;
  border-radius: 10px;
  height: 50px;
  font-size: 20px;
  transition: box-shadow 0.5s;

  > span {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: box-shadow 0.5s;
  }

  &:hover {
    box-shadow: none;

    > span {
      box-shadow: inset ${color.blue['300']} 5px 5px 10px,
        inset ${color.white} -5px -5px 10px;
    }
  }
`

type Props = {
  to?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ to, onClick = () => true, children }) => {
  if (to) {
    return (
      <Link to={to} css={buttonStyle}>
        <span>{children}</span>
      </Link>
    )
  }
  return (
    <button css={buttonStyle} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default Button
