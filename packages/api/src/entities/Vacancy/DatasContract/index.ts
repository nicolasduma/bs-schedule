import {
  BarberIdType,
  UserIdType,
  TimestampType,
  ServicesContract,
} from '../types'

interface DatasContract {
  readonly barberId: BarberIdType
  readonly userId: UserIdType
  readonly timestamp: TimestampType
  readonly services: ServicesContract
}

export default DatasContract
