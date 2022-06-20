import { generatePasswordHash, makeResult, makeResultPromise } from '#/utils'

import { userEntity } from '#/entities'

import { usersRepository } from '#/repositories'

import DatasContract from './DatasContract'

const makeExecuteInteractor = (usersRepository: usersRepository.Contract) => {
  const executeInteractor = async (datas: DatasContract) => {
    const { error, success: user } = userEntity.make(datas)

    if (error) {
      return makeResult(error)
    }

    user.password = generatePasswordHash(user.password)

    return await makeResultPromise(() => usersRepository.save(user))
  }

  return executeInteractor
}

export default makeExecuteInteractor
