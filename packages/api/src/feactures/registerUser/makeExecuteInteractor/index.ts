import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'

import { generatePasswordHash } from '#/utils'

import { userEntity } from '#/entities'

import { usersRepository } from '#/repositories'

import DatasContract from './DatasContract'

const makeExecuteInteractor = (usersRepository: usersRepository.Contract) => {
  const executeInteractor = async (datas: DatasContract) => {
    const { user: userFromRequest } = datas

    const { error, success: user } = userEntity.make(userFromRequest)

    if (error) {
      return makeResult(error)
    }

    user.password = generatePasswordHash(user.password)

    return await makeResultFromPromise(() => usersRepository.save(user))
  }

  return executeInteractor
}

export default makeExecuteInteractor
