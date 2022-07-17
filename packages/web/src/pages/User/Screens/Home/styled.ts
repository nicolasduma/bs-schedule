import tw from 'twin.macro'

export const Container = tw.div`
  w-full
  h-full
  flex flex-col items-center gap-10
`

export const ServicesContainer = tw.div`
  w-full
  flex flex-col gap-4
`

export const ServicesText = tw.div`
  pb-1
  border-solid border-b-2 border-zinc-500
  text-xl text-zinc-300 uppercase
  font-bold
`

export const PricingTable = tw.div`
  w-full
  flex flex-col gap-3
  text-[16px]
`

export const PricingTableLine = tw.div`
  w-full
  flex justify-between gap-3
  relative
  whitespace-nowrap

  [:before]:(
    content-['................................................................................']
    flex-grow order-2
    letter-spacing[3px]
    overflow-hidden
  )
`

export const PricingTableLineDescription = tw.span`
  order-1
  text-zinc-400 uppercase
`

export const PricingTableLineValue = tw.span`
  order-3
  text-zinc-300
  font-bold
`

export const UserArea = tw.div`
  w-full
  flex flex-col items-center gap-2
`

export const YourEmail = tw.div`
  max-w-full
  text-xs text-zinc-500 overflow-ellipsis
  overflow-hidden
`
