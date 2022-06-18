import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '#/constants'

const generateJWT = (data: any) => jwt.sign(data, JWT_SECRET)

export default generateJWT
