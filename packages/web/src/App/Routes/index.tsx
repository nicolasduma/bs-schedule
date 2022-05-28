import React from 'react'
import { Routes as RoutesContainer, Route } from 'react-router-dom'

import { PreloadPage, AccessPage } from '#/pages'

const Routes = () => (
  <RoutesContainer>
    <Route path="/" element={<PreloadPage />} />
    <Route path="/acessar" element={<AccessPage />} />
  </RoutesContainer>
)

export default Routes
