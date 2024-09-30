import { useState } from "react";
// Importamos el icono de estrella de react-icons
// npm install react-icons --save
import { FaStar } from "react-icons/fa";
// Importamos los estilos para el componente
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
    // Estado para almacenar la calificación seleccionada
    const [rating, setRating] = useState(0);
    // Estado para almacenar la calificación en la que el mouse está actualmente
    const [hover, setHover] = useState(0);

    // Función para manejar el clic en una estrella
    function handleClick(getCurrentIndex) {
        // Actualizamos el estado 'rating' con la calificación seleccionada
        setRating(getCurrentIndex);
    }

    // Función para manejar el evento cuando el mouse entra en una estrella
    function handleMouseEnter(getCurrentIndex) {
        // Actualizamos el estado 'hover' con el índice de la estrella en la que está el mouse
        setHover(getCurrentIndex);
    }

    // Función para manejar el evento cuando el mouse sale de una estrella
    function handleMouseLeave() {
        // Restauramos el estado 'hover' a la calificación actual
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {/* Creamos un arreglo con el número de estrellas y mapeamos sobre él */}
            {/* El uso del carácter de subrayado (_) en el método map() es una convención común 
            en JavaScript para indicar que un argumento no se utiliza dentro de la función de mapeo. */}
            {[...Array(noOfStars)].map((_, index) => {
                // Ajustamos el índice para que comience en 1
                index += 1;

                return (
                    <FaStar
                        // Usamos el índice como clave para cada estrella
                        key={index}
                        // Determinamos la clase de la estrella según si está activa o inactiva
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        // Manejamos el clic en la estrella para establecer la calificación
                        onClick={() => handleClick(index)}
                        // Manejamos el evento de movimiento del mouse sobre la estrella
                        onMouseMove={() => handleMouseEnter(index)}
                        // Manejamos el evento de salida del mouse de la estrella
                        onMouseLeave={() => handleMouseLeave()}
                        // Establecemos el tamaño de la estrella
                        size={40}
                    />
                );
            })}
        </div>
    );
}