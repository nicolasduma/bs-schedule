import React from 'react'

import { LayoutComponent, PageComponent } from '#/components'

import Form from './Form'
import * as Styled from './styled'

const AccessPage = () => (
  <>
    <PageComponent.Head>
      <title>BS Schedule - Acessar</title>
    </PageComponent.Head>
    <PageComponent.Body>
      <Styled.Container>
        <Styled.LogoContainer>
          <LayoutComponent.Logo />
        </Styled.LogoContainer>

      <Form />

        <Styled.OrLine>OU</Styled.OrLine>
      </Styled.Container>
    </PageComponent.Body>
  </>
)

export default AccessPage
