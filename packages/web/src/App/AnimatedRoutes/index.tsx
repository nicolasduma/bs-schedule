import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import { AccessPage, PreloadPage, UserPage } from '#/pages'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PreloadPage />} />
        <Route path="/acessar" element={<AccessPage />} />
        <Route path="/usuario/:id" element={<UserPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
