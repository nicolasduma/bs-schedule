import React from 'react'

import { useStateSelector } from '#/hooks'
import { AnimatePresence } from 'framer-motion'

import HomeScreen from './Home'
import ScheduleScreen from './Schedule'
import * as Styled from './styled'

const Screens = () => {
  const { userScreen } = useStateSelector((state) => state)

  return (
    <Styled.Screens>
      <AnimatePresence>
        {userScreen === 'schedule' ? (
          <ScheduleScreen key="screen-schedule" />
        ) : (
          <HomeScreen key="screen-home" />
        )}
      </AnimatePresence>
    </Styled.Screens>
  )
}

export default Screens
