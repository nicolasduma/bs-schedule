import tw, { styled } from 'twin.macro'

import { UIComponent } from '#/components'

export const ImageSlider = tw.div`
  w-full
  aspect-ratio[16/9]
  flex items-center justify-between
  p-2
  relative
`

export const Image = tw.img`
  w-full
  h-full
  absolute
  top-0 left-0
  z-[-1]
  rounded-md
  object-cover
  transition-opacity
  transition-duration[500ms]
`

export const Button = styled(UIComponent.Button.Filled)`
  ${tw`
  
  w-auto
  h-auto
  text-xl text-zinc-200
  bg-transparent
  hover:bg-transparent
  focus:ring-offset-0

  `}
`

export const IndicatorsContainer = tw.div`
  self-end
  flex gap-1.5
  `

export const Indicator = tw.div`
  w-1.5
  aspect-ratio[1/1]
  rounded-full
  bg-zinc-200
`
