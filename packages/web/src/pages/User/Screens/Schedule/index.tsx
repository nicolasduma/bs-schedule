import React from 'react'

import * as Styled from './styled'

const ScheduleScreen = () => {
  return (
    <Styled.Schedule>
      <Styled.EmptySchedule children="Nenhum horário agendado" />
    </Styled.Schedule>
  )
}

export default ScheduleScreen
