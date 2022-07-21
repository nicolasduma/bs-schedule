import tw, { styled } from 'twin.macro'

import { Field } from '..'

export const FieldWithIcon = styled(Field)`
  ${tw`

  w-full
  h-14
  
  `}
`

export const IconContainer = tw.div`
  px-4
  text-zinc-500
  text-[1.7rem]
  order[-1]
`
