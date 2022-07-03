import tw, { styled } from 'twin.macro'

import { UIComponent } from '#/components'

export const GoogleButton = styled(UIComponent.Button.Filled)`
  ${tw`

  px-[5%]
  flex justify-center items-center
  bg-darkslategray-800
  text-zinc-100
  cursor-pointer

  [:hover]:bg-darkslategray-700
  disabled:(hover:bg-darkslategray-800)


  [> :nth-child(1)]:(text-xl)
  [> span]:flex-grow

  `}
`
