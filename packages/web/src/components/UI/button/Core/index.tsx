import React, { ButtonHTMLAttributes, useRef } from 'react'

type PropsType = ButtonHTMLAttributes<HTMLButtonElement>

const Core = ({ onClick, ...props }: PropsType) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <button
      {...props}
      ref={buttonRef}
      onClick={(event) => {
        buttonRef.current && buttonRef.current.blur()
        onClick && onClick(event)
      }}
    />
  )
}

export default Core
