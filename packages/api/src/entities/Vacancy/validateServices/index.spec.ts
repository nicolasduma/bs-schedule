import validateServices from '.'
import { ServicesContract } from '../types'
import schema from './schema'

const servicesTest: ServicesContract = {
  gradient: true,
  beard: true,
  eyebrow: true,
}

describe('validate services to make vacancy', () => {
  it('should be able validate', () => {
    const { success: services } = validateServices(servicesTest, true)

    expect(services).toBeTruthy()
    expect(typeof services).toBe('object')
    expect(services.gradient).toBe(servicesTest.gradient)
    expect(services.beard).toBe(servicesTest.beard)
    expect(services.eyebrow).toBe(services.eyebrow)
  })

  it('should not be able to validate without gradient property', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { gradient, ...servicesTestCopy } = servicesTest
    // @ts-ignore
    const { error } = validateServices(servicesTestCopy)

    expect(error.message).toBe(schema.errorMessage.required.gradient)
  })

  it('should not be able to validate with invalid gradient property', () => {
    // @ts-ignore
    const { error } = validateServices({ ...servicesTest, gradient: 'false' })

    expect(error.message).toBe(schema.errorMessage.properties.gradient)
  })

  it('should not be able to validate without beard property', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { beard, ...servicesTestCopy } = servicesTest
    // @ts-ignore
    const { error } = validateServices(servicesTestCopy)

    expect(error.message).toBe(schema.errorMessage.required.beard)
  })

  it('should not be able to validate with invalid beard property', () => {
    // @ts-ignore
    const { error } = validateServices({ ...servicesTest, beard: 'false' })

    expect(error.message).toBe(schema.errorMessage.properties.beard)
  })

  it('should not be able to validate without eyebrow property', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { eyebrow, ...servicesTestCopy } = servicesTest
    // @ts-ignore
    const { error } = validateServices(servicesTestCopy)

    expect(error.message).toBe(schema.errorMessage.required.eyebrow)
  })

  it('should not be able to validate with invalid eyebrow property', () => {
    // @ts-ignore
    const { error } = validateServices({ ...servicesTest, eyebrow: 'false' })

    expect(error.message).toBe(schema.errorMessage.properties.eyebrow)
  })
})
