import { makeResult } from '@bs-schedule/utils'

const validateString = (data: string) =>
  makeResult(typeof data === 'string' ? null : { message: 'not-string' })

export default validateString
