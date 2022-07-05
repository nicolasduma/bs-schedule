import { AnyAction } from 'redux'

const changeCurrentUser = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_CURRENT_USER' ? action.payload : state

const changeModalVisibility = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_MODAL_VISIBILITY' ? action.payload : state

const reducers = {
  currentUser: changeCurrentUser,
  modalVisibility: changeModalVisibility,
}

export default reducers
