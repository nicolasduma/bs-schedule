import passwordGenerator from 'generate-password'

const generatePassword = (length = 16, withNumbers = true) =>
  passwordGenerator.generate({ length, numbers: withNumbers })

export default generatePassword
