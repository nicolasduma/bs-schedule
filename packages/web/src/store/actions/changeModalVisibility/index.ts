const changeModalVisibility = (isVisible: boolean, message?: string) => ({
  type: 'CHANGE_MODAL_VISIBILITY',
  payload: isVisible ? { message: message ?? null } : false,
})

export default changeModalVisibility
