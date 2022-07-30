import { validate as validateUUID } from 'uuid'

import make from '.'
import { DatasContract } from '../'

const testVacancy: DatasContract = {
  barberId: 'cfb21b3b-6696-4d64-88e0-2e372604725c',
  userId: 'cfb21b3b-6696-4d64-88e0-2e372604725c',
  timestamp: 2000000,
  services: { gradient: true, beard: true, eyebrow: true },
}

describe('make vacancy', () => {
  it('should be able make a vacancy', () => {
    const { success: vacancy } = make(testVacancy)

    expect(vacancy.barberId).toBe(testVacancy.barberId)
    expect(vacancy.userId).toBe(testVacancy.userId)
    expect(vacancy.timestamp).toBe(testVacancy.timestamp)
    expect(vacancy.services.gradient).toBe(testVacancy.services.gradient)
    expect(validateUUID(vacancy.id)).toBe(true)
  })

  it('should not be able make vacancy with invalid userId', () => {
    const { error } = make({ ...testVacancy, userId: '' })

    expect(error).not.toBeFalsy()
    expect(error.layer).toBe('entity')
  })
})
