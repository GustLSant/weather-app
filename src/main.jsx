import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  
  // eh util para identificar side effects de multipla renderizacao
//   <React.StrictMode> 
//   <App />
// </React.StrictMode>,
)
