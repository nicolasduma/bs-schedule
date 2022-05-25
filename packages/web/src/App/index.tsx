import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import * as Styled from './styled'

const App = () => {
  return (
    <Styled.App>
      <HelmetProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </HelmetProvider>
    </Styled.App>
  )
}

export default App
