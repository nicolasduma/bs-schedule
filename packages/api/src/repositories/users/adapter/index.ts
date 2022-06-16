import prisma from '#/libs/prisma'

import { userEntity } from '#/entities'

import { Contract } from '../'

const adapter: Contract = {
  save: async (user: userEntity.Contract) => {
    const filtedDatas: userEntity.Contract = {
      email: user.email,
      password: user.password,
      id: user.id,
    }
    await prisma.user.create({ data: filtedDatas })
  },
}

export default adapter
