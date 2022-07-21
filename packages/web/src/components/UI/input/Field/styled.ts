import tw from 'twin.macro'

export const Field = tw.div`
  flex justify-center items-center
  border-solid border-2 border-zinc-600
  rounded-md
`

export const Input = tw.input`
  w-full
  bg-transparent
  outline-none
  placeholder:text-zinc-400
  [::-ms-reveal]:hidden
`
