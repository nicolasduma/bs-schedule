import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Overlay = tw.div`
  flex justify-center items-center
  fixed top-0 bottom-0 left-0 right-0
  bg-black bg-opacity-60
`

export const Main = styled(motion.div)`
  ${tw`

  w-[300px]
  min-h-[200px]
  flex flex-col justify-between gap-6
  px-6 py-7
  rounded-md
  absolute
  bg-darkslategray-900
  
  `}

  @media screen and (max-width: 330px) {
    width: 90%;
  }
`

export const Title = tw.span`
  text-xl
`

export const Description = tw.span`
  text-sm
  text-zinc-400
  w-full
`

export const ActionsButtonContainer = tw.div`
  w-full
  flex gap-4

  [> button]:(
    h-10
    text-sm
  )
`
