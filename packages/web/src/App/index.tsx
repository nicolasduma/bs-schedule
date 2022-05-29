import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import AnimatedRoutes from './AnimatedRoutes'
import * as Styled from './styled'

const App = () => {
  return (
    <Styled.App>
      <HelmetProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </Styled.App>
  )
}

export default App
