import React from 'react'

import { PageComponent } from '#/components'

import * as Styled from './styled'

const UserPage = () => {
  return (
    <>
      <PageComponent.Head>
        <title>BS Schedule - Usuário</title>
      </PageComponent.Head>

      <PageComponent.Body>
        <Styled.Container>
          <Styled.ScreensContainer></Styled.ScreensContainer>
        </Styled.Container>
      </PageComponent.Body>
    </>
  )
}

export default UserPage
