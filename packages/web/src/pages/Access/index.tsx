import React, { useState } from 'react'

import { LayoutComponent, PageComponent } from '#/components'

import Form from './Form'
import GoogleButton from './GoogleButton'
import * as Styled from './styled'

const AccessPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  return (
    <>
      <PageComponent.Head>
        <title>BS Schedule - Acessar</title>
      </PageComponent.Head>
      <PageComponent.Body>
        <Styled.Container>
          <Styled.LogoContainer>
            <LayoutComponent.Logo />
          </Styled.LogoContainer>

          <Form isDisabled={isDisabled} setIsDisabled={setIsDisabled} />

          <Styled.OrLine>OU</Styled.OrLine>

          <GoogleButton disabled={isDisabled} />
        </Styled.Container>
      </PageComponent.Body>
    </>
  )
}

export default AccessPage
