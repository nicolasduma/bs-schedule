import React, { FormHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { At, Eye, EyeSlash, LockKey } from 'phosphor-react'

import { UIComponent } from '#/components'

import * as Styled from './styled'

interface PropsInterface extends FormHTMLAttributes<HTMLFormElement> {
  isDisabled: boolean
  setIsDisabled: (isDisabled: boolean) => void
}

const Form = ({ isDisabled, setIsDisabled, ...props }: PropsInterface) => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)

  useEffect(() => {
    ;(passwordInputRef.current as HTMLInputElement).type = isVisiblePassword
      ? 'text'
      : 'password'
  }, [passwordInputRef, isVisiblePassword])

  return (
    <Styled.Form
      {...props}
      onSubmit={async (event) => {
        event.preventDefault()
      }}
    >
      <UIComponent.Input.FieldWithIcon
        elementRef={emailInputRef}
        elementIcon={<At />}
        placeholder="Email"
        type="email"
        spellCheck="false"
        autoComplete="disabled"
        disabled={isDisabled}
      />

      <UIComponent.Input.FieldWithIcon
        elementRef={passwordInputRef}
        elementIcon={<LockKey />}
        placeholder="Senha"
        spellCheck="false"
        autoComplete="disabled"
        disabled={isDisabled}
      >
        <Styled.RevealPasswordButton
          type="button"
          disabled={isDisabled}
          data-use_to_focus="off"
          onClick={() => {
            setIsVisiblePassword(!isVisiblePassword)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              setIsVisiblePassword(!isVisiblePassword)
            }
          }}
        >
          {isVisiblePassword ? <EyeSlash /> : <Eye />}
        </Styled.RevealPasswordButton>
      </UIComponent.Input.FieldWithIcon>

      <UIComponent.Button.Filled type="submit" disabled={isDisabled}>
        Acessar
      </UIComponent.Button.Filled>
    </Styled.Form>
  )
}

export default Form
