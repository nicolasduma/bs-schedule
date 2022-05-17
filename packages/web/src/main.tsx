import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '#/App'
import '#/main.css'

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
