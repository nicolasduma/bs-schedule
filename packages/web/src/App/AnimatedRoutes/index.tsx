import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import { PreloadPage, AccessPage } from '#/pages'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PreloadPage />} />
        <Route path="/acessar" element={<AccessPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes