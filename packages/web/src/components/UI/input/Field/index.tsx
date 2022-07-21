import React, { InputHTMLAttributes, ReactNode, useState } from 'react'

import { CSSProp } from 'styled-components'

import * as Styled from './styled'

interface PropsInterface extends InputHTMLAttributes<HTMLInputElement> {
  elementRef: React.RefObject<HTMLInputElement>
  children?: ReactNode
  cssWithFocus?: CSSProp<any>
}

const Field = (props: PropsInterface) => {
  const [isFocused, setIsFocused] = useState(false)

  const {
    elementRef,
    children,
    cssWithFocus,
    onBlur,
    onFocus,
    className,
    ...propsRest
  } = props

  return (
    <Styled.Field
      onClick={({ target }) => {
        if ((target as HTMLInputElement).dataset.use_to_focus !== 'off')
          elementRef.current && elementRef.current.focus()
      }}
      css={isFocused ? cssWithFocus : ''}
      className={className}
    >
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
    </Styled.Field>
  )
}

export default Field
