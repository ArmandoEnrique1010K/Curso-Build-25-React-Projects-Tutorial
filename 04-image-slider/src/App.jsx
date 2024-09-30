import ImageSlider from './components/ImageSlider'

function App() {

  return (
    // Renderizamos el componente ImageSlider y le pasamos propiedades
    <ImageSlider
      // URL de la API que proporciona las imágenes
      url={"https://picsum.photos/v2/list"}
      // Número de la página para la paginación de imágenes
      page={"1"}
      // Límite de imágenes a mostrar en el slider
      limit={"10"}
    />)
}

export default App
