import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '#/store'

import { UIComponent } from '#/components'

import AnimatedRoutes from './AnimatedRoutes'
import * as Styled from './styled'

const App = () => {
  return (
    <Styled.App>
      <ReduxProvider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </HelmetProvider>

        <UIComponent.Modal.Presence />
      </ReduxProvider>
    </Styled.App>
  )
}

export default App
