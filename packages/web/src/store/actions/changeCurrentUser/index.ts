interface UserInterface {
  id: string
  email: string
}

const changeCurrentUser = (user: UserInterface | null = null) => ({
  type: 'CHANGE_CURRENT_USER',
  payload: user,
})

export default changeCurrentUser
