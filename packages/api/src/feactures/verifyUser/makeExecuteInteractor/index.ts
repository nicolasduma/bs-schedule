import { makeResult, makeResultPromise, verifyPassword } from '#/utils'

import { userEntity } from '#/entities'

import { usersRepository } from '#/repositories'

import DatasContract from './DatasContract'

const makeExecuteInteractor = (usersRepository: usersRepository.Contract) => {
  const executeInteractor = async (datas: DatasContract) => {
    const { error: validationUserError } = userEntity.validateUser(datas)

    if (validationUserError) {
      return makeResult(validationUserError)
    }

    const { error: errorFindingUser, success: userFound } =
      await makeResultPromise(() => usersRepository.findByEmail(datas.email))

    if (errorFindingUser) {
      return makeResult(errorFindingUser)
    }

    if (typeof userFound !== 'object') {
      return makeResult({ message: 'email/not-exists' })
    }

    const { error: verificationPasswordError } = verifyPassword(
      datas.password,
      userFound.password
    )

    if (verificationPasswordError) {
      return makeResult({
        layer: 'interactor',
        message: verificationPasswordError.message,
      })
    }

    return makeResult(null)
  }

  return executeInteractor
}

export default makeExecuteInteractor
