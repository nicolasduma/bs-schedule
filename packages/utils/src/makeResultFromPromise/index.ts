import makeResult from '../makeResult'

const makeResultFromPromise = async (callback: CallableFunction) => {
  try {
    return makeResult(null, await callback())
  } catch (error) {
    return makeResult(error)
  }
}

export default makeResultFromPromise
