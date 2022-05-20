import React from 'react'

import { LayoutComponent, PageComponent } from '#/components'

import * as Styled from './styled'

const PreloadPage = () => {
  return (
    <PageComponent.Body>
      <Styled.Container>
        <LayoutComponent.Logo />
      </Styled.Container>
    </PageComponent.Body>
  )
}

export default PreloadPage
