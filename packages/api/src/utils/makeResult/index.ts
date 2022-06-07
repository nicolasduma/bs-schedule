const makeResult = (error: any, success?: any) => ({
  error: error || false,
  success: success || !error,
})

export default makeResult
