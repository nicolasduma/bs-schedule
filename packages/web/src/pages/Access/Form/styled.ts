import tw from 'twin.macro'

export const Form = tw.form`
  w-full
  flex flex-col justify-center items-center gap-4
`

export const RevealPasswordButton = tw.button`
  mr-4
  p-1
  relative
  rounded-md
  text-2xl text-zinc-600
  border-[2px]
  border-transparent
  outline-none
  focus:border-amber-400

  [:before]:(content-[''] w-full h-full absolute left-0 top-0)
`
