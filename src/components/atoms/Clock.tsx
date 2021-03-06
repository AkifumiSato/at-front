/** @jsx jsx */
import * as React from 'react'
import { css, jsx, keyframes } from '@emotion/core'
import { color } from '../../stylesheets/color'

const secBounce = (start: number) => keyframes`
  from {
    transform: rotate(${start}deg);
  }
  
  to {
    transform: rotate(${start + 360}deg);
  }
`

const handStyle = css`
  border-radius: 2px;
  border: none;
  position: absolute;
  right: calc(50% - 1px);
  top: calc(50% - 1px);
  transform-origin: calc(100% - 1px) center;
  background-color: ${color.gray['400']};
  height: 2px;
`

const Clock: React.FC = () => {
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const id = setInterval(() => {
      const newDate = new Date()
      if (date.getMinutes() !== newDate.getMinutes()) {
        setDate(newDate)
      }
    }, 100)
    return () => clearInterval(id)
  }, [date, setDate])

  const seconds = (date.getSeconds() * 1000 + date.getMilliseconds()) / 1000

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${color.gray['300']} 20px 20px 50px,
          ${color.white} -20px -20px 50px;
        border-radius: 50%;
        height: 500px;
        width: 500px;
        font-size: 120px;
        position: relative;
      `}
    >
      <hr
        css={css`
          ${handStyle};
          width: 125px;
          transform: rotate(
            ${90 +
            (date.getHours() % 12) * (360 / 12) +
            (date.getMinutes() / 12) * 6}deg
          );
        `}
      />
      <hr
        css={css`
          ${handStyle};
          width: 200px;
          transform: rotate(${90 + date.getMinutes() * (360 / 60)}deg);
        `}
      />
      <hr
        css={css`
          ${handStyle};
          background-color: ${color.orange['200']};
          height: 1px;
          width: 200px;
          animation: 60s ${secBounce(90 + seconds * (360 / 60))} linear infinite;
        `}
      />
    </div>
  )
}

export default React.memo(Clock)
