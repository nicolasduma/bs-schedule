import React, { InputHTMLAttributes, ReactElement, useState } from 'react'

import tw from 'twin.macro'

import * as Styled from './styled'

interface PropsInterface extends InputHTMLAttributes<HTMLInputElement> {
  elementRef: React.RefObject<HTMLInputElement>
  elementIcon: ReactElement
  children?: ReactElement
}

const FieldWithIcon = ({
  elementRef,
  elementIcon,
  children,
  ...props
}: PropsInterface) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Styled.FieldContainer
      css={isFocused ? tw`border-amber-400 text-amber-400` : ''}
      onClick={() => {
        elementRef.current && elementRef.current.focus()
      }}
      css={
        isFocused ? tw`border-amber-400 [div:nth-child(1)]:text-amber-400` : ''
      }
    >
      <Styled.IconInInputContainer>{elementIcon}</Styled.IconInInputContainer>

      <Styled.Input
        {...props}
        ref={elementRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {children}
    </Styled.FieldContainer>
  )
}

export default FieldWithIcon
