import React, { InputHTMLAttributes, useState } from 'react'

const Core = ({
  value,
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState(value ?? '')

  return (
    <input
      {...props}
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value)
        if (onChange) onChange(event)
      }}
    />
  )
}

export default Core
