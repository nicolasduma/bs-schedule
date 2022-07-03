import tw, { styled } from 'twin.macro'

import { UIComponent } from '#/components'

export const Form = tw.form`
  w-full
  flex flex-col justify-center items-center gap-4
`

export const RevealPasswordButton = styled(UIComponent.Button.Core)`
  ${tw`

  mr-4
  p-1
  border-[2px] border-transparent
  rounded-md
  relative
  text-2xl text-zinc-600
  outline-none
  focus:border-amber-400

  [:before]:(content-[''] w-full h-full absolute left-0 top-0)
  
  `}
`
