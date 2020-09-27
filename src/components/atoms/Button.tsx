/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import { color } from '../../stylesheets/color'

const strongStyle = css`
  background: linear-gradient(
    -45deg,
    ${color.green['100']},
    ${color.green['300']}
  );
  color: ${color.white};
`

const buttonStyle = ({ strong }: { strong: boolean }) => css`
  ${strong ? strongStyle : ''};
  display: block;
  box-shadow: ${color.blue['300']} 15px 15px 30px,
    ${color.white} -15px -15px 30px;
  border-radius: 10px;
  height: 50px;
  font-size: 20px;
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
      box-shadow: inset ${color.blue['300']} 5px 5px 10px,
        inset ${color.white} -5px -5px 10px;
    }
  }
`

const iconStyle = (path?: string) =>
  path
    ? css`
        &:before {
          content: '';
          background: url(${path}) center center no-repeat;
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
    : ''

type Props = {
  to?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  width?: string
  icon?: string
  strong?: boolean
}

const Button: React.FC<Props> = ({
  to,
  onClick = () => true,
  width = 'auto',
  icon,
  strong = false,
  children,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        css={css`
          ${buttonStyle({ strong })};
          width: ${width};
          ${iconStyle(icon)};
        `}
      >
        <span>{children}</span>
      </Link>
    )
  }
  return (
    <button
      css={css`
        ${buttonStyle({ strong })};
        width: ${width};
        ${iconStyle(icon)};
      `}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
