type StepType = 'chooseBarber' | 'finish' | 'finished'

const changeStepToSchedule = (step: StepType = 'chooseBarber') => ({
  type: 'CHANGE_STEP_TO_SCHEDULE',
  payload: step,
})

export default changeStepToSchedule
