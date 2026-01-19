import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import Pruebas from './pages/Pruebas.jsx'
import PruebasProductos from './pages/PruebasProductos.jsx'
import RecetaPage from './pages/RecetaPage.jsx'
import { BrowserRouter } from 'react-router';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode> {/* es para hacer comprobaciones */}
    <MyApp />
  </StrictMode>
  </BrowserRouter>
)
