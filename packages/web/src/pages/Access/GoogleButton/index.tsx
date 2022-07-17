import React, { ButtonHTMLAttributes } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'
import { sendUserToAccessService } from '#/services'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import firebase from '#/libs/firebase'

import { changeCurrentUser, changeModalVisibility } from '#/store/actions'

import * as Styled from './styled'

const googleProvider = new GoogleAuthProvider()

type PropsType = ButtonHTMLAttributes<HTMLButtonElement>

const GoogleButton = ({ onClick, ...props }: PropsType) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const accessGoogleAccount = async () => {
    const { error, success: credentials } = await makeResultFromPromise(
      async () => await signInWithPopup(firebase.auth, googleProvider)
    )

    if (error) {
      const isNecessaryToShowModal = !(
        error.code === 'auth/popup-closed-by-user' ||
        error.code === 'auth/cancelled-popup-request'
      )

      isNecessaryToShowModal &&
        dispatch(changeModalVisibility(true, 'oauth/error'))
    }

    return makeResult(error, credentials)
  }

  return (
    <Styled.GoogleButton
      {...props}
      onClick={async (event) => {
        ;(event.target as HTMLButtonElement).blur()
        onClick && onClick(event)
        const { success: credentials } = await accessGoogleAccount()

        if (!credentials) return

        const { error, success: userFromResponse } =
          await sendUserToAccessService({
            authMethod: 'google',
            email: credentials.user.email,
            password: credentials.user.uid,
          })

        if (error) return dispatch(changeModalVisibility(true, error.message))

        dispatch(changeCurrentUser(userFromResponse))
        navigate(`/usuario/${userFromResponse.id}`)
      }}
    >
      <BsGoogle />
      <span>Acessar com o Google</span>
    </Styled.GoogleButton>
  )
}

export default GoogleButton
