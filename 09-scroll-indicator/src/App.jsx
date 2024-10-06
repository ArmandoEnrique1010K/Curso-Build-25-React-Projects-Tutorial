// Importa el componente ScrollIndicator
import ScrollIndicator from "./components/ScrollIndicator"

function App() {

  // Retorna el componente ScrollIndicator y le pasa la URL como propiedad
  // Esta URL se usará para hacer una solicitud a la API y obtener los datos
  return (
    <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
  )
}

// Exporta el componente App como el componente principal de la aplicación
export default App
