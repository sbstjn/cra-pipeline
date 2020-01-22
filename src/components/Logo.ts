import styled, { keyframes } from 'styled-components'

import logo from '../logo.svg'

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`
