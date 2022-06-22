import React from 'react'

import { HTMLMotionProps } from 'framer-motion'

import * as Styled from './styled'

interface PropsInterface extends HTMLMotionProps<'div'> {
  animateToShow?: boolean
  animateToHidden?: boolean
}

const Body = ({
  animateToShow = true,
  animateToHidden = true,
  ...props
}: PropsInterface) => (
  <Styled.Body
    initial={animateToShow ? { opacity: 0 } : {}}
    animate={
      animateToShow
        ? {
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1,
            },
          }
        : {}
    }
    exit={
      animateToHidden
        ? {
            opacity: 0,
            transition: {
              duration: 1,
            },
          }
        : {}
    }
    {...props}
  />
)

export default Body
