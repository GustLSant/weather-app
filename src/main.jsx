import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { DataProvider } from './components/DataContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>
  
  // eh util para identificar side effects de multipla renderizacao
// <React.StrictMode> 
//   <DataProvider>
//     <App />
//   </DataProvider>
// </React.StrictMode>,
)
