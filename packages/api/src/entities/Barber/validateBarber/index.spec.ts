import validateBarber from '.'
import { DatasContract } from '../'
import base64Image from '../validatePicture/base64Image'

const testBarber: DatasContract = {
  name: 'John Doe',
  description: 'Lorem Ipsum is a simple text',
  picture: base64Image,
}

describe('validate barber to make it', () => {
  it('should be able validate', () => {
    const { success: barber } = validateBarber(testBarber, true)

    expect(barber).toBeTruthy()
    expect(barber.name).toBe(testBarber.name)
    expect(barber.description).toBe(testBarber.description)
    expect(barber.picture).toBe(testBarber.picture)
  })

  it('should not be able to validate without name', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, ...testBarberCopy } = testBarber
    // @ts-ignore
    const { error } = validateBarber(testBarberCopy)

    expect(error.message).toBe('name/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid name', () => {
    // @ts-ignore
    const { error } = validateBarber({ ...testBarber, name: ' ' })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate without description', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description, ...testBarberCopy } = testBarber
    // @ts-ignore
    const { error } = validateBarber(testBarberCopy)

    expect(error.message).toBe('description/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid description', () => {
    const { error } = validateBarber({ ...testBarber, description: ' ' })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate without picture', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { picture, ...testBarberCopy } = testBarber
    // @ts-ignore
    const { error } = validateBarber(testBarberCopy)

    expect(error.message).toBe('picture/not-found')
    expect(error.layer).toBe('entity')
  })

  it('should not be able to validate with invalid picture', () => {
    // @ts-ignore
    const { error } = validateBarber({ ...testBarber, picture: 123 })

    expect(error.message).toBeTruthy()
    expect(error.layer).toBe('entity')
  })
})
