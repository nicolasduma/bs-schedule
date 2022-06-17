import { generatePasswordHash } from '#/utils'

import { userEntity } from '#/entities'
import { EmailType } from '#/entities/User/Contract/types'

import { Contract } from '../'

const { success: user1 } = userEntity.make({
  email: 'contact1@email.com',
  password: '123456',
})
const { success: user2 } = userEntity.make({
  email: 'contact2@email.com',
  password: '123456',
})
const usersArray = [
  { ...user1, password: generatePasswordHash(user1.password) },
  { ...user2, password: generatePasswordHash(user2.password) },
]

const inMemory: Contract = {
  save: async () => {
    console.log()
  },

  findByEmail: async (email: EmailType) => {
    const filtedUsers = await usersArray.filter((user) => user.email === email)
    return filtedUsers[0] || null
  },
}

export default inMemory
