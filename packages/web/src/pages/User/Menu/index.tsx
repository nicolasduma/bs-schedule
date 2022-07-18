import React, { DetailsHTMLAttributes } from 'react'
import { useDispatch } from 'react-redux'

import { useStateSelector } from '#/hooks'
import { Calendar, House, Scissors } from 'phosphor-react'
import tw from 'twin.macro'

import { changeUserScreen } from '#/store/actions'

import * as Styled from './styled'

type PropsType = DetailsHTMLAttributes<HTMLDivElement>

const Menu = ({ children, ...propsRest }: PropsType) => {
  const dispatch = useDispatch()
  const { userScreen } = useStateSelector((state) => state)

  return (
    <Styled.Menu {...propsRest}>
      <Styled.Item
        css={!userScreen || userScreen === 'home' ? tw`text-amber-300` : ''}
      >
        <Styled.ItemIcon children={<House weight="regular" />} />

        <Styled.ItemButton
          onClick={() => dispatch(changeUserScreen('home'))}
          children="Home"
        />
      </Styled.Item>

      <Styled.Item css={userScreen === 'toSchedule' ? tw`text-amber-300` : ''}>
        <Styled.ItemIcon children={<Scissors weight="regular" />} />

        <Styled.ItemButton
          onClick={() => dispatch(changeUserScreen('toSchedule'))}
          children="Agendar"
        />
      </Styled.Item>

      <Styled.Item css={userScreen === 'schedule' ? tw`text-amber-300` : ''}>
        <Styled.ItemIcon children={<Calendar weight="regular" />} />

        <Styled.ItemButton
          onClick={() => dispatch(changeUserScreen('schedule'))}
          children="Agenda"
        />
      </Styled.Item>

      {children}
    </Styled.Menu>
  )
}

export default Menu
