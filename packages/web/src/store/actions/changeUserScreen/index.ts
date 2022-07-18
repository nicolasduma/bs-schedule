type UserScreenType = 'home' | 'toSchedule' | 'schedule'

const changeUserScreen = (userScreen: UserScreenType = 'home') => ({
  type: 'CHANGE_USER_SCREEN',
  payload: userScreen,
})

export default changeUserScreen
