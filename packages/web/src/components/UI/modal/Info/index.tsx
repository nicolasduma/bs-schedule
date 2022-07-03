import React, { HTMLAttributes } from 'react'
import { useDispatch } from 'react-redux'

import { changeModalVisibility } from '#/store/actions'

import { Core } from '..'

import { Button } from '../..'

interface PropsInterface extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

const Action = (props: PropsInterface) => {
  const dispatch = useDispatch()
  return (
    <Core
      {...props}
      buttons={
        <Button.Filled onClick={() => dispatch(changeModalVisibility(false))}>
          Ok
        </Button.Filled>
      }
    />
  )
}

export default Action
