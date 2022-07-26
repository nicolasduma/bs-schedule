import { AnyAction } from 'redux'

const changeCurrentUser = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_CURRENT_USER' ? action.payload : state

const changeModalVisibility = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_MODAL_VISIBILITY' ? action.payload : state

const changeStepToSchedule = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_STEP_TO_SCHEDULE' ? action.payload : state

const changeUserScreen = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_USER_SCREEN' ? action.payload : state

const reducers = {
  currentUser: changeCurrentUser,
  modalVisibility: changeModalVisibility,
  stepToSchedule: changeStepToSchedule,
  userScreen: changeUserScreen,
}

export default reducers
