import tw, { styled } from 'twin.macro'

import { UIComponent } from '#/components'

export const Schedule = styled(tw.div)`
  ${tw`

  w-full
  flex flex-wrap justify-between items-center gap-5
  absolute

  `}

  @media screen and (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Card = tw.div`
  w-full max-w-[17.2rem]
  h-48
  flex flex-col justify-between items-center gap-3
  p-4
  rounded-md
  bg-darkslategray-800
  text-center text-zinc-200
`

export const DateAndHourContainer = tw.div`
  w-full
  flex flex-col
`

export const HourText = tw.div`
  text-[1rem]
  font-medium
`

export const DateText = tw.div`
  text-xl
  font-bold
`

export const ServicesAndProfissionalContainer = tw.div`
  w-full
  flex gap-1.5
`

export const ServicesAndProfissionalContent = tw.div`
  w-1/2
`

export const ServicesAndProfissionalTitle = tw.div`
  text-sm text-zinc-400
`

export const ServicesAndProfissionalText = tw.div`
  w-full
  text-sm
  font-semibold
`

export const ToUnbookButton = styled(UIComponent.Button.Core)`
  ${tw`

  p-0.5
  text-sm text-zinc-300 text-underline-offset[2px]
  outline-none
  hover:underline
  focus:underline
  
  `}
`

export const EmptySchedule = tw.div`
  w-full
  pt-6
  text-center text-2xl text-zinc-300
`
