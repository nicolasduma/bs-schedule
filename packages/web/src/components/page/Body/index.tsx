import React from 'react'

import { makeOpacityTransitionOptions } from '#/styles'
import { HTMLMotionProps } from 'framer-motion'

import * as Styled from './styled'

interface PropsInterface extends HTMLMotionProps<'div'> {
  animateToShow?: boolean
  animateToHidden?: boolean
}

const transitionOptions = makeOpacityTransitionOptions(1)

const Body = (props: PropsInterface) => {
  const { animateToShow = true, animateToHidden = true, ...propsRest } = props

  return (
    <Styled.Body
      {...propsRest}
      variants={transitionOptions}
      initial="initial"
      animate={animateToShow ? 'show' : ''}
      exit={animateToHidden ? 'hidden' : ''}
    />
  )
}

export default Body
