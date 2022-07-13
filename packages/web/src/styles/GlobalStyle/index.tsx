import React from 'react'

import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme``,
    ...tw`
      
    min-h-[600px] h-screen
    bg-darkslategray-900
    text-white text-opacity-95
    antialiased
    -webkit-tap-highlight-color[transparent]

    [::-webkit-scrollbar]:(hidden)
    [> div#root]:(h-full)
    
    `,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
