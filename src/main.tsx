import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { MainPage } from './react-pattern/pages/MainPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
