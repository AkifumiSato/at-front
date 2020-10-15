/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { color } from '../../stylesheets/color'

const strongStyle = css`
  color: ${color.orange['200']};
`

const buttonStyle = css`
  display: block;
  box-shadow: ${color.gray['300']} 15px 15px 30px,
    ${color.white} -15px -15px 30px;
  border-radius: 10px;
  color: ${color.gray['400']};
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  transition: box-shadow 0.5s;
  position: relative;

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
      box-shadow: inset ${color.gray['300']} 5px 5px 10px,
        inset ${color.white} -5px -5px 10px;
    }
  }

  &:before {
    content: '';
    background-size: 20px 20px;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
`

type Props = {
  to?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  width?: string
  icon?: string
  strong?: boolean
}

const Button: React.FC<Props> = ({
  onClick = () => true,
  width = 'auto',
  icon,
  strong = false,
  children,
}) => (
  <button
    css={css`
      :before {
        background: ${icon ? `url(${icon}) center center no-repeat` : ''};
      }
      ${buttonStyle};
      ${strong ? strongStyle : ''};
      width: ${width};
    `}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
)

export default Button
