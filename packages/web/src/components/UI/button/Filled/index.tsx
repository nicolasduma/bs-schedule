import React, { ButtonHTMLAttributes } from 'react'

import * as Styled from './styled'

const Filled = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Styled.Filled {...props} />
}

export default Filled
