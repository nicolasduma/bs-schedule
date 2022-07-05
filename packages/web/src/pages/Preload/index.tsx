import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useStateSelector } from '#/hooks'
import { sendUserTokenToVerifyService } from '#/services'

import { LOCAL_STORAGE } from '#/constants'

import { changeCurrentUser } from '#/store/actions'

import { LayoutComponent, PageComponent } from '#/components'

import * as Styled from './styled'

const PreloadPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { currentUser } = useStateSelector((state) => state)

  const [canGoToTheNextPage, setCanGoToTheNextPage] = useState<boolean>(false)

  setTimeout(() => {
    setCanGoToTheNextPage(true)
  }, 1000)

  useEffect(() => {
    const userToken = localStorage.getItem(LOCAL_STORAGE.USER_TOKEN)

    if (!userToken) return

    const update = async () => {
      const { error, success: user } = await sendUserTokenToVerifyService(
        userToken
      )

      if (error) {
        localStorage.removeItem(LOCAL_STORAGE.USER_TOKEN)
        return navigate('/acessar')
      }

      return dispatch(changeCurrentUser(user))
    }

    update()
  })

  useEffect(() => {
    if (currentUser && canGoToTheNextPage)
      navigate(currentUser ? `/user/${currentUser.id}` : '/acessar')
  }, [currentUser, canGoToTheNextPage])

  return (
    <PageComponent.Body animateToShow={false}>
      <Styled.Container>
        <LayoutComponent.Logo />
      </Styled.Container>
    </PageComponent.Body>
  )
}

export default PreloadPage
