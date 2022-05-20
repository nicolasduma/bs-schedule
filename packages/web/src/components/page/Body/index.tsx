import React from 'react'

import * as Styled from './styled'

interface PropsInterface {
  children?: any
}

const Body = ({ children }: PropsInterface) => (
  <Styled.Body>{children}</Styled.Body>
)

export default Body
