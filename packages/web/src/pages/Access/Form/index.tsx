import React, { useRef } from 'react'

import { At, LockKey } from 'phosphor-react'

import { UIComponent } from '#/components'

import * as Styled from './styled'

const Form = () => {
  const [emailInputRef, passwordInputRef] = [useRef(null), useRef(null)]

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
        type="password"
      />
    </Styled.Form>
  )
}

export default Form
