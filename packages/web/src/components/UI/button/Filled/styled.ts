import tw from 'twin.macro'

export const Filled = tw.button`
  w-full
  h-14
  bg-amber-400
  rounded-md
  text-darkslategray-900
  font-medium
  outline-none

  hover:bg-amber-300 transition-colors
  focus:(ring-2 ring-amber-400 ring-offset-2 ring-offset-darkslategray-900)
  disabled:(opacity-60 cursor-default hover:bg-amber-400)
`
