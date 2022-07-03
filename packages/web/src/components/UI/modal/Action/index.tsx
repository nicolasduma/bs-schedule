import React, { HTMLAttributes } from 'react'
import { useDispatch } from 'react-redux'

import { changeModalVisibility } from '#/store/actions'

import { Core } from '..'

import { Button } from '../..'
import * as Styled from './styled'

interface PropsInterface extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  onClickInYesButton?: () => any
}

const Action = ({ onClickInYesButton, ...props }: PropsInterface) => {
  const dispatch = useDispatch()
  return (
    <Core
      {...props}
      buttons={
        <>
          <Styled.NotButton
            onClick={() => dispatch(changeModalVisibility(false))}
          >
            Não
          </Styled.NotButton>
          <Button.Filled
            onClick={() => {
              onClickInYesButton && onClickInYesButton()
              dispatch(changeModalVisibility(false))
            }}
          >
            Sim
          </Button.Filled>
        </>
      }
    />
  )
}

export default Action
