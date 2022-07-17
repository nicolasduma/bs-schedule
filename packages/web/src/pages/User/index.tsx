import React from 'react'

import { PageComponent } from '#/components'

import Menu from './Menu'
import * as Styled from './styled'

const UserPage = () => {
  return (
    <>
      <PageComponent.Head>
        <title>BS Schedule - Usuário</title>
      </PageComponent.Head>

      <PageComponent.Body>
        <Styled.Container>
          <Menu />

        </Styled.Container>
      </PageComponent.Body>
    </>
  )
}

export default UserPage
