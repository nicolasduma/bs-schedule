import decodeJWT from '.'

const testToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0IjoidGVzdCIsImlhdCI6MTY1NTUxNDIzNH0.h6fSpBRXA_0AaGLVZckbeuM3waaxPYX3ZcupH7y7Rbs'

const testToken2 =
  'eyJhbGciOiJIUzII6IkpXVCJ9.eyJ0ZXN0Ij.SJXdX7DwV-oK7WSpt_hvESOeJa5CkAk'

describe('decode JWT', () => {
  it('should be able decode a JWT', async () => {
    const { success: decoded } = await decodeJWT(testToken)
    expect(decoded).toBeTruthy()
  })

  it('should not be able decode a JWT', async () => {
    const { error } = await decodeJWT(testToken2)
    expect(error.message).toBe('token/invalid')
  })
})
