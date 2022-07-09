import prisma from '#/libs/prisma'

import { userEntity } from '#/entities'
import { EmailType } from '#/entities/User/types'

import { Contract } from '../'

const adapter: Contract = {
  save: async (user: userEntity.DatasContract) => {
    const filtedDatas: userEntity.DatasContract = {
      authMethod: user.authMethod,
      email: user.email,
      password: user.password,
    }

    await prisma.user.create({ data: filtedDatas })
  },

  findByEmail: async (email: EmailType) => {
    // @ts-ignore
    const user: userEntity.DatasContract = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  },
}

export default adapter
