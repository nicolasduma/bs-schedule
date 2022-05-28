import tw from 'twin.macro'

export const Container = tw.div`
  w-full max-w-xl
  flex flex-col gap-6
  px-4
`

export const OrLine = tw.div`
  w-full
  flex items-center gap-[8%]
  p-[2%]

  [:before, :after]:(content-[''] w-full h-0.5 bg-darkslategray-700)
`
