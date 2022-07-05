import React, { InputHTMLAttributes, ReactElement, useState } from 'react'

import tw from 'twin.macro'

import * as Styled from './styled'

interface PropsInterface extends InputHTMLAttributes<HTMLInputElement> {
  elementRef: React.RefObject<HTMLInputElement>
  elementIcon: ReactElement
  children?: ReactElement
}

const FieldWithIcon = (props: PropsInterface) => {
  const [isFocused, setIsFocused] = useState(false)

  const { elementRef, elementIcon, children, onBlur, onFocus, ...propsRest } =
    props

  return (
    <Styled.FieldContainer
      onClick={({ target }) => {
        if ((target as HTMLInputElement).dataset.use_to_focus !== 'off')
          elementRef.current && elementRef.current.focus()
      }}
      css={
        isFocused ? tw`border-amber-400 [div:nth-child(1)]:text-amber-400` : ''
      }
    >
      <Styled.IconInInputContainer>{elementIcon}</Styled.IconInInputContainer>

      <Styled.Input
        {...propsRest}
        ref={elementRef}
        onBlur={(event) => {
          setIsFocused(false)
          onBlur && onBlur(event)
        }}
        onFocus={(event) => {
          setIsFocused(true)
          onFocus && onFocus(event)
        }}
      />

      {children}
    </Styled.FieldContainer>
  )
}

export default FieldWithIcon
