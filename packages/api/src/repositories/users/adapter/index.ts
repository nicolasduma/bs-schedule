import prisma from '#/libs/prisma'

import { userEntity } from '#/entities'

import Contract from '../Contract'

const adapter: Contract = {
  save: async (datas: userEntity.Contract) => {
    await prisma.user.create({ data: datas })
  },
}

export default adapter
