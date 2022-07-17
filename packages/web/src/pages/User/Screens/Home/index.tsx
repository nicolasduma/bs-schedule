import React from 'react'

import { useStateSelector } from '#/hooks'

import { UIComponent } from '#/components'

import * as Styled from './styled'

const HomeScreen = () => {
  const { currentUser } = useStateSelector((state) => state)

  return (
    <Styled.Container>

      <Styled.ServicesContainer>
        <Styled.ServicesText children="Serviços" />

        <Styled.PricingTable>
          <Styled.PricingTableLine>
            <Styled.PricingTableLineDescription children="Corte Normal" />
            <Styled.PricingTableLineValue children="R$ 20,00" />
          </Styled.PricingTableLine>

          <Styled.PricingTableLine>
            <Styled.PricingTableLineDescription children="Corte Degrade" />
            <Styled.PricingTableLineValue children="R$ 25,00" />
          </Styled.PricingTableLine>

          <Styled.PricingTableLine>
            <Styled.PricingTableLineDescription children="Corte de Barba" />
            <Styled.PricingTableLineValue children="R$ 15,00" />
          </Styled.PricingTableLine>

          <Styled.PricingTableLine>
            <Styled.PricingTableLineDescription children="Sobrancelha" />
            <Styled.PricingTableLineValue children="R$ 10,00" />
          </Styled.PricingTableLine>
        </Styled.PricingTable>
      </Styled.ServicesContainer>

      <Styled.UserArea>
        <UIComponent.Button.Filled children="Sair" />
        <Styled.YourEmail children={currentUser.email} />
      </Styled.UserArea>
    </Styled.Container>
  )
}

export default HomeScreen
