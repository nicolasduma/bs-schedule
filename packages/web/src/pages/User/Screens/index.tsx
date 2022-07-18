import React from 'react'

import { useStateSelector } from '#/hooks'
import HomeScreen from './Home'
import ScheduleScreen from './Schedule'
import * as Styled from './styled'

const Screens = () => {
  const { userScreen } = useStateSelector((state) => state)

  return (
    <Styled.ScreenContant>
        {userScreen === 'schedule' ? <ScheduleScreen /> : <HomeScreen />}
    </Styled.ScreenContant>
  )
}

export default Screens
