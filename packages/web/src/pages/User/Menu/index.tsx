import React, { DetailsHTMLAttributes, useState } from 'react'

import { Calendar, House, Scissors } from 'phosphor-react'
import tw from 'twin.macro'

import * as Styled from './styled'

type PropsType = DetailsHTMLAttributes<HTMLDivElement>

const Menu = ({ children, ...propsRest }: PropsType) => {
  const [thatIsSelected, setThatIsSelected] = useState<1 | 2 | 3>(1)

  return (
    <Styled.Menu {...propsRest}>
      <Styled.Item css={thatIsSelected === 1 ? tw`text-amber-300` : ''}>
        <Styled.ItemIcon children={<House weight="regular" />} />

        <Styled.ItemButton
          onClick={() => setThatIsSelected(1)}
          children="Home"
        />
      </Styled.Item>

      <Styled.Item css={thatIsSelected === 2 ? tw`text-amber-300` : ''}>
        <Styled.ItemIcon children={<Scissors weight="regular" />} />

        <Styled.ItemButton
          onClick={() => setThatIsSelected(2)}
          children="Agendar"
        />
      </Styled.Item>

      <Styled.Item css={thatIsSelected === 3 ? tw`text-amber-300` : ''}>
        <Styled.ItemIcon children={<Calendar weight="regular" />} />

        <Styled.ItemButton
          onClick={() => setThatIsSelected(3)}
          children="Agenda"
        />
      </Styled.Item>

      {children}
    </Styled.Menu>
  )
}

export default Menu
