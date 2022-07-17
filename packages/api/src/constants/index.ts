import { CookieOptions } from 'express'

export const PORT = process.env.PORT || 7777

export const ACCESS_TOKEN_COOKIE = {
  name: 'accessToken',
  options: {
    httpOnly: true,
  } as CookieOptions,
}
