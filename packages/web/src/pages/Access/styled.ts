import tw from 'twin.macro'

import { UIComponent } from '#/components'

export const Container = tw.div`
  w-full max-w-xl
  flex flex-col items-center gap-6
  px-4
`

export const LogoContainer = tw.div`
  w-60
`

export const OrLine = tw.div`
  w-full
  flex items-center gap-[8%]
  p-[2%]
  text-[.8rem]
  tracking-widest

  [:before, :after]:(content-[''] w-full h-0.5 bg-darkslategray-700)
`

export const AccessWithGoogleButton = tw(UIComponent.Button.Filled)`
  px-[5%]
  flex justify-center items-center
  bg-darkslategray-800
  text-zinc-100
  cursor-pointer
  [:hover]:bg-darkslategray-700

  [> :nth-child(1)]:(text-xl)
  [> span]:flex-grow
`
