import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import Pruebas from './pages/Pruebas.jsx'
import PruebasProductos from './pages/PruebasProductos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* es para hacer comprobaciones */}
    <PruebasProductos />
  </StrictMode>,
)
