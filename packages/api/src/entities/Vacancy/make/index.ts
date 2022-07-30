import { makeResult } from '@bs-schedule/utils'
import { v4 as uuid } from 'uuid'

import { DatasContract, ModelContract, validateVacancy } from '..'

const make = (datas: DatasContract) => {
  const { error, success: validatedVacancy } = validateVacancy(datas, true)

  if (error) return makeResult({ layer: 'entity', message: error.message })

  const vacancy: ModelContract = {
    ...validatedVacancy,
    id: uuid(),
  }

  return makeResult(null, vacancy)
}

export default make
