import { makeResult } from '@bs-schedule/utils'
import Ajv, { Schema } from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'

const validate = (toValidate: any, schema: Schema) => {
  const ajv = new Ajv({ allErrors: true })
  addFormats(ajv)
  addErrors(ajv)

  const validate = ajv.compile(schema)

  validate(toValidate)

  const error = validate.errors ? { message: validate.errors[0].message } : null

  return makeResult(error)
}

export default validate
