import makeResult from '../makeResult'

const makeResultPromise = async (callback: CallableFunction) => {
  try {
    return makeResult(null, await callback())
  } catch (error) {
    return makeResult(error)
  }
}

export default makeResultPromise
