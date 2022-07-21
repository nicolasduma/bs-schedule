import React, { InputHTMLAttributes, ReactNode } from 'react'

import tw from 'twin.macro'

import * as Styled from './styled'

interface PropsInterface extends InputHTMLAttributes<HTMLInputElement> {
  elementRef: React.RefObject<HTMLInputElement>
  elementIcon: ReactNode
  children?: ReactNode
}

const FieldWithIcon = (props: PropsInterface) => {
  const { elementIcon, children, ...propsRest } = props

  return (
    <Styled.FieldWithIcon
      cssWithFocus={tw`border-amber-400 [> div]:text-amber-400`}
      {...propsRest}
    >
      <Styled.IconContainer children={elementIcon} />
      {children}
    </Styled.FieldWithIcon>
  )
}

export default FieldWithIcon
