import makeResult from '.'

describe('make result object', () => {
  it('should be able make a result', () => {
    const { error, success } = makeResult(false, { datas: 'success' })
    expect(error).toBe(false)
    expect(success.datas).toBe('success')
  })

  it('should be able make a result without success param', () => {
    const { error, success } = makeResult({ code: 77 })
    expect(error.code).toBe(77)
    expect(success).toBe(false)
  })
})
