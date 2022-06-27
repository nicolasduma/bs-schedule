import { AnyAction } from 'redux'

const changeModalVisibility = (state = false, action: AnyAction) =>
  action.type === 'CHANGE_MODAL_VISIBILITY' ? action.payload : state

const reducers = {
  modalVisibility: changeModalVisibility,
}

export default reducers
