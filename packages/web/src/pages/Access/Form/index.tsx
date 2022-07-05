import React, { FormHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { sendUserToAccessService } from '#/services'
import { At, Eye, EyeSlash, LockKey } from 'phosphor-react'

import { LOCAL_STORAGE } from '#/constants'

import { changeModalVisibility } from '#/store/actions'

import { UIComponent } from '#/components'

import * as Styled from './styled'

interface PropsInterface extends FormHTMLAttributes<HTMLFormElement> {
  isDisabled: boolean
  setIsDisabled: (isDisabled: boolean) => void
}

const Form = (props: PropsInterface) => {
  const { isDisabled, setIsDisabled, onSubmit, ...propsRest } = props

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)

  useEffect(() => {
    if (passwordInputRef.current)
      passwordInputRef.current.type = isVisiblePassword ? 'text' : 'password'
  }, [passwordInputRef, isVisiblePassword])

  return (
    <Styled.Form
      {...propsRest}
      onSubmit={async (event) => {
        event.preventDefault()
        onSubmit && onSubmit(event)

        setIsDisabled(true)

        const { error, success: token } = await sendUserToAccessService({
          authMethod: 'password',
          email: (emailInputRef.current as HTMLInputElement).value,
          passwordOrGoogleId: (passwordInputRef.current as HTMLInputElement)
            .value,
        })

        if (error) {
          dispatch(changeModalVisibility(true, error.message))
          setIsDisabled(false)
        } else {
          localStorage.setItem(LOCAL_STORAGE.USER_TOKEN, token)
          setIsDisabled(false)
          navigate('/')
        }
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
        children={
          <Styled.RevealPasswordButton
            type="button"
            data-use_to_focus="off"
            disabled={isDisabled}
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
        }
      />

      <UIComponent.Button.Filled
        type="submit"
        disabled={isDisabled}
        children="Acessar"
      />
    </Styled.Form>
  )
}

export default Form
