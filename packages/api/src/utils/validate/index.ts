import Ajv, { Schema } from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'

import makeResult from '../makeResult'

const validate = (toValidate: Record<string, any>, schema: Schema) => {
  const ajv = new Ajv({ allErrors: true })
  addFormats(ajv)
  addErrors(ajv)

  const validate = ajv.compile(schema)

  validate(toValidate)

  const error = validate.errors ? validate.errors[0] : null

  return makeResult({ msg: error?.message })
}

export default validate
