import { validate as validateUUID } from 'uuid'

import make from '.'

import { DatasContract } from '..'

import base64Image from '../validatePicture/base64Image'

const testBarber: DatasContract = {
  name: 'John Doe',
  description: 'Lorem Ipsum is a simple text',
  picture: base64Image,
}

describe('make barber', () => {
  it('should be able make a barber', () => {
    const { success: barber } = make(testBarber)

    expect(barber.name).toBe(testBarber.name)
    expect(barber.description).toBe(testBarber.description)
    expect(barber.picture).toBe(testBarber.picture)
    expect(validateUUID(barber.id)).toBe(true)
  })

  it('should not be able make barber without description', () => {
    const { error } = make({ ...testBarber, description: '' })

    expect(error).not.toBeFalsy()
    expect(error.layer).toBe('entity')
  })
})
