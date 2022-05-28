import React from 'react'

import { PageComponent } from '#/components'

import Form from './Form'
import * as Styled from './styled'

const AccessPage = () => (
  <>
    <PageComponent.Head>
      <title>BS Schedule - Acessar</title>
    </PageComponent.Head>
    <PageComponent.Body>
      <Styled.Container>
      <Form />
      </Styled.Container>
    </PageComponent.Body>
  </>
)

export default AccessPage
