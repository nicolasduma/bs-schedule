import { makeResult } from '@bs-schedule/utils'
import { v4 as uuid } from 'uuid'

import { DatasContract, ModelContract, validateBarber } from '..'

const make = (datas: DatasContract) => {
  const { error, success: validatedBarber } = validateBarber(datas, true)

  if (error) return makeResult({ layer: 'entity', message: error.message })

  const barber: ModelContract = {
    ...validatedBarber,
    id: uuid(),
  }

  return makeResult(null, barber)
}

export default make
