// Importa los hooks useEffect y useState de React
import { useEffect, useState } from "react";
// Importa íconos para las flechas de navegación
// npm install react-icons --save
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// Importa los estilos CSS
import "./styles.css";

// Componente ImageSlider que recibe las propiedades url, limit y page
export default function ImageSlider({ url, limit = 5, page = 1 }) {
    // Estado para almacenar las imágenes obtenidas
    const [images, setImages] = useState([]);

    // Estado para llevar el control de la imagen actualmente visible
    const [currentSlide, setCurrentSlide] = useState(0);

    // Estado para manejar mensajes de error
    const [errorMsg, setErrorMsg] = useState(null);

    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(false);

    // Función asíncrona para obtener imágenes desde la API
    async function fetchImages(getUrl) {
        try {
            // Establece el estado de carga a verdadero
            setLoading(true);

            // Realiza la solicitud fetch a la URL proporcionada
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

            // Convierte la respuesta a JSON
            const data = await response.json();

            if (data) {
                // Si hay datos, se almacena en el estado images
                setImages(data);

                // Cambia el estado de carga a falso
                setLoading(false);
            }
        } catch (e) {
            // Si hay un error, se almacena en el estado errorMsg
            setErrorMsg(e.message);

            // Cambia el estado de carga a falso
            setLoading(false);
        }
    }

    // Función para manejar el clic en la flecha izquierda
    function handlePrevious() {
        // Retrocede al último slide si está en el primero
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    // Función para manejar el clic en la flecha derecha
    function handleNext() {
        // Avanza al primero si está en el último slide
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    // useEffect para cargar imágenes cuando cambia la URL
    useEffect(() => {
        // Llama a fetchImages si la URL no está vacía
        if (url !== "") fetchImages(url);
    }, [url]);

    // Imprime las imágenes en la consola para depuración
    console.log(images);

    // Si está cargando, se muestra un mensaje de carga
    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }

    // Si hay un mensaje de error, se muestra
    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
    }

    return (
        // Contenedor principal del slider
        <div className="container">
            {/* Ícono de flecha izquierda */}
            <BsArrowLeftCircleFill
                // Maneja el clic para ir al slide anterior
                onClick={handlePrevious}
                // Clases CSS para estilo
                className="arrow arrow-left"
            />

            {/* Comprueba si hay imágenes */}
            {images && images.length
                ? images.map((imageItem, index) => (
                    // Mapea sobre las imágenes
                    <img
                        // ID único para cada imagen
                        key={imageItem.id}
                        // Texto alternativo para accesibilidad
                        alt={imageItem.download_url}
                        // URL de la imagen
                        src={imageItem.download_url}
                        // Determina la clase CSS para mostrar la imagen activa
                        className={
                            currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                        }
                    />
                ))
                : null
            }

            {/* Ícono de flecha derecha */}
            <BsArrowRightCircleFill
                // Maneja el clic para ir al siguiente slide
                onClick={handleNext}
                // Clases CSS para estilo
                className="arrow arrow-right"
            />

            {/* Indicadores de círculo para los slides */}
            <span className="circle-indicators">
                {/* Comprueba si hay imágenes */}
                {images && images.length
                    ? images.map((_, index) => (
                        // Mapea para crear un botón por cada imagen
                        <button
                            // ID único para cada botón
                            key={index}
                            // Determina la clase CSS para el botón indicador
                            className={
                                currentSlide === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-indicator"
                            }
                            // Cambia al slide correspondiente al clic
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                    : null
                }
            </span>
        </div>
    );
}