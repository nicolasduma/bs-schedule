import makeResultFromPromise from '.'

const promise = async (withError: boolean) => {
  await setTimeout(() => 1 + 1, 500)

  if (withError) {
    /* eslint-disable-next-line no-throw-literal */
    throw { code: 55 }
  }

  return 'success'
}

describe('make result object', () => {
  it('should be able make a result with success', async () => {
    const { error, success } = await makeResultFromPromise(() => promise(false))

    expect(success).toBe('success')
    expect(error).toBe(false)
  })

  it('should be able make a result with error', async () => {
    const { error, success } = await makeResultFromPromise(() => promise(true))

    expect(error.code).toBe(55)
    expect(success).toBe(false)
  })
})
