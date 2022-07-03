import React, { ButtonHTMLAttributes } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

import { makeResultFromPromise } from '@bs-schedule/utils'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import firebase from '#/libs/firebase'

import { changeModalVisibility } from '#/store/actions'

import * as Styled from './styled'

const googleProvider = new GoogleAuthProvider()

type PropsType = ButtonHTMLAttributes<HTMLButtonElement>

const GoogleButton = ({ onClick, ...props }: PropsType) => {
  const dispatch = useDispatch()

  const accessWithGoogle = async () => {
    const { error, success } = await makeResultFromPromise(
      async () => await signInWithPopup(firebase.auth, googleProvider)
    )

    if (error) {
      const isNecessaryToShowModal = !(
        error.code === 'auth/popup-closed-by-user' ||
        error.code === 'auth/cancelled-popup-request'
      )

      isNecessaryToShowModal &&
        dispatch(changeModalVisibility(true, 'oauth/error'))

      return null
    }

    console.log(success)
  }

  return (
    <Styled.GoogleButton
      {...props}
      onClick={(event) => {
        ;(event.target as HTMLButtonElement).blur()
        accessWithGoogle()
        onClick && onClick(event)
      }}
    >
      <BsGoogle />
      <span>Acessar com o Google</span>
    </Styled.GoogleButton>
  )
}

export default GoogleButton
