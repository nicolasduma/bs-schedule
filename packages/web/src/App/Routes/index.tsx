import React from 'react'
import { Routes as RoutesContainer, Route } from 'react-router-dom'

import { PreloadPage } from '#/pages'

const Routes = () => (
  <RoutesContainer>
    <Route path="/" element={<PreloadPage />} />
  </RoutesContainer>
)

export default Routes
