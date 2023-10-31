import React from 'react'
import ReactDOM from 'react-dom/client'
import MostrarComida from './MostrarComida'
import "./styles/Principal.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MostrarComida/>
    </React.StrictMode>
  </BrowserRouter>
)
