import makeResult from '../makeResult'

const validateString = (data: string) =>
  makeResult(typeof data === 'string' ? null : { message: 'not-string' })

export default validateString
