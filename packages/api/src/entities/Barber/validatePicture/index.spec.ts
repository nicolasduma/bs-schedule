import validatePicture from '.'
import base64Image from './base64Image'

describe('validate picture to make user', () => {
  it('should be able validate', () => {
    const { success: picture } = validatePicture(base64Image, true)

    expect(picture).toBeTruthy()
    expect(typeof picture).toBe('string')
  })

  it('should not be able to validate with a number', () => {
    // @ts-ignore
    const { error } = validatePicture(123456)
    expect(error.message).toBe('picture/not-string')
  })
})
