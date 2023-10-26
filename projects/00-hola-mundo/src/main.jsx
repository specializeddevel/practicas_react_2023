import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import Clock from './clock.jsx'
import { CounterApp } from './CounterApp.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Clock />
    <CounterApp value={20} />    
  </React.StrictMode>,
)
