import tw, { styled } from 'twin.macro'

import { UIComponent } from '#/components'

export const Menu = tw.div`
  w-full
  py-2.5
  flex items-center justify-around
  sticky top-0 left-0 z-[1]
  bg-darkslategray-900
  box-shadow[0 5px 10px #00000030]
`

export const Item = tw.label`
  w-16
  flex flex-col items-center justify-center gap-1
  text-zinc-300
  transition-colors transition-duration[200ms]
  cursor-pointer
`

export const ItemIcon = tw.div`
  text-2xl
`

export const ItemButton = styled(UIComponent.Button.Core)`
  ${tw`

  flex justify-center items-center
  rounded-full
  bg-transparent
  text-xs uppercase text-underline-offset[2px]
  font-weight[500]
  outline-none

  focus:underline

  `}
`
