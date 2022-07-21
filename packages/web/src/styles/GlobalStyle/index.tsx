import React from 'react'

import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme``,
    ...tw`
      
    bg-darkslategray-900
    text-white text-opacity-95
    antialiased
    -webkit-tap-highlight-color[transparent]

    [::-webkit-scrollbar]:(hidden)
    [> div#root]:(w-full)
    
    `,
  },
})

const GlobalStyle = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyle
