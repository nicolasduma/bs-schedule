import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import * as Styled from './styled'

const App = () => {
  return (
    <Styled.App>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Styled.App>
  )
}

export default App
