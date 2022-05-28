import React, { useEffect, useRef, useState } from 'react'

import { At, Eye, EyeSlash, LockKey } from 'phosphor-react'

import { UIComponent } from '#/components'

import * as Styled from './styled'

const Form = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)

  useEffect(() => {
    ;(passwordInputRef.current as HTMLInputElement).type = isVisiblePassword
      ? 'text'
      : 'password'
  }, [passwordInputRef, isVisiblePassword])

  return (
    <Styled.Form>
      <UIComponent.Input.FieldWithIcon
        elementRef={emailInputRef}
        elementIcon={<At />}
        placeholder="Email"
        type="email"
      />

      <UIComponent.Input.FieldWithIcon
        elementRef={passwordInputRef}
        elementIcon={<LockKey />}
        placeholder="Senha"
        spellCheck="false"
        autoComplete="disabled"
      >
        <Styled.RevealPasswordButton
          type="button"
          data-use_to_focus="off"
          onClick={({ target }) => {
            ;(target as HTMLButtonElement).blur()
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
    </Styled.Form>
  )
}

export default Form
