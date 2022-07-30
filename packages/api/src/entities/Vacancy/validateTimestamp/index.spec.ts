import validateTimestamp from '.'

describe('validate timestamp to make vacancy', () => {
  it('should be able validate', () => {
    const { success: timestamp } = validateTimestamp(123456, true)

    expect(timestamp).toBeTruthy()
    expect(typeof timestamp).toBe('number')
  })

  it('should not be able to validate with a string', () => {
    // @ts-ignore
    const { error } = validateTimestamp('123456')
    expect(error.message).toBe('timestamp/not-number')
  })
})
