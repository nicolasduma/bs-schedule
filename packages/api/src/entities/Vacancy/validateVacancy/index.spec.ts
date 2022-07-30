import validateVacancy from '.'
import { DatasContract } from '../'

const testVacancy: DatasContract = {
  barberId: 'cfb21b3b-6696-4d64-88e0-2e372604725c',
  userId: 'cfb21b3b-6696-4d64-88e0-2e372604725c',
  timestamp: 2000000,
  services: { gradient: true, beard: true, eyebrow: true },
}

describe('validate vacancy to make it', () => {
  it('should be able validate', () => {
    const { success: vacancy } = validateVacancy(testVacancy, true)

    expect(vacancy).toBeTruthy()
    expect(vacancy.barberId).toBe(testVacancy.barberId)
    expect(vacancy.userId).toBe(testVacancy.userId)
    expect(vacancy.timestamp).toBe(testVacancy.timestamp)
    expect(vacancy.services.gradient).toBe(testVacancy.services.gradient)
  })

  it('should not be able to validate without barberId', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { barberId, ...testVacancyCopy } = testVacancy
    // @ts-ignore
    const { error } = validateVacancy(testVacancyCopy)

    expect(error.message).toBe('barberId/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid barberId', () => {
    // @ts-ignore
    const { error } = validateVacancy({ ...testVacancy, barberId: ' ' })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate without description', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId, ...testVacancyCopy } = testVacancy
    // @ts-ignore
    const { error } = validateVacancy(testVacancyCopy)

    expect(error.message).toBe('userId/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid userId', () => {
    const { error } = validateVacancy({ ...testVacancy, userId: ' ' })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate without timestamp', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { timestamp, ...testVacancyCopy } = testVacancy
    // @ts-ignore
    const { error } = validateVacancy(testVacancyCopy)

    expect(error.message).toBe('timestamp/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid timestamp', () => {
    // @ts-ignore
    const { error } = validateVacancy({ ...testVacancy, timestamp: '123' })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate without services', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { services, ...testVacancyCopy } = testVacancy
    // @ts-ignore
    const { error } = validateVacancy(testVacancyCopy)

    expect(error.message).toBe('services/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid services', () => {
    // @ts-ignore
    const { error } = validateVacancy({ ...testVacancy, services: {} })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })
})
