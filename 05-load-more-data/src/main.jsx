// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // Desactiva <StrictMode>, evita que los productos se carguen dos veces al cargar la página
  // Esto se debe a que <StrictMode> en modo desarrollo monta y desmonta los componentes dos veces para detectar efectos secundarios inesperados.
  // <StrictMode>
  <App />
  // </StrictMode>,
)
