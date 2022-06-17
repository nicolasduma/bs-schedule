import bcrypt from 'bcrypt'

const generatePasswordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

export default generatePasswordHash
