import tw from 'twin.macro'

export const FieldContainer = tw.div`
  w-full
  h-14
  flex justify-center items-center
  border-solid border-2 border-zinc-600
  rounded-md
  [div:nth-child(1)]:text-zinc-500
`

export const IconInInputContainer = tw.div`
  px-4
  text-[1.7rem]
`

export const Input = tw.input`
  w-full
  pr-4
  bg-transparent
  outline-none
  placeholder:text-zinc-400
  [::-ms-reveal]:hidden
`
