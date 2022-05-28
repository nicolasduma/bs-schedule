import React, { ButtonHTMLAttributes } from 'react'
import { GoogleLogin } from 'react-google-login'
import { BsGoogle } from 'react-icons/bs'

import { CLIENT_ID_TO_GOOGLE_LOGIN } from '#/constants'

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

        <GoogleLogin
          clientId={CLIENT_ID_TO_GOOGLE_LOGIN}
          render={(props: ButtonHTMLAttributes<HTMLButtonElement>) => (
            <Styled.AccessWithGoogleButton
              type="button"
              onClick={props.onClick}
              disabled={props.disabled}
            >
              <BsGoogle />
              <span>Acessar com o Google</span>
            </Styled.AccessWithGoogleButton>
          )}
        />
      </Styled.Container>
    </PageComponent.Body>
  </>
)

export default AccessPage
