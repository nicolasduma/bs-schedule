import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '#/App'
import GlobalStyle from '#/styles/GlobalStyle'

/* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
