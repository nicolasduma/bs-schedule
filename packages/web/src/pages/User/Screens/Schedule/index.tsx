import React from 'react'

import { makeOpacityTransitionOptions } from '#/styles'

import * as Styled from './styled'

const transitionOptions = makeOpacityTransitionOptions(0.3)

const ScheduleScreen = () => {
  return (
    <Styled.Schedule
      variants={transitionOptions}
      initial="initial"
      animate="show"
      exit="hidden"
    >
      <Styled.EmptySchedule children="Nenhum horário agendado" />
    </Styled.Schedule>
  )
}

export default ScheduleScreen
