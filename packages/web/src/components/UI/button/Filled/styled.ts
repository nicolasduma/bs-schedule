import tw from 'twin.macro'

import { Core } from '../'

export const Filled = tw(Core)`
  w-full
  h-14
  bg-amber-400
  rounded-md
  text-darkslategray-900
  font-medium
  outline-none
  transition-colors

  hover:bg-amber-300 
  focus:(ring-2 ring-amber-400 ring-offset-2 ring-offset-darkslategray-900)
  disabled:(opacity-60 cursor-default hover:bg-amber-400)
`
