import { useState } from "react";
// Importa el icono de estrella de react-icons
// npm install react-icons --save
import { FaStar } from "react-icons/fa";
// Importa los estilos para el componente
import './styles.css';

// El componente funcional posee la propiedad noOfStars cuyo valor por defecto es 5
export default function StarRating({ noOfStars = 5 }) {
    // Estado para almacenar la calificación seleccionada
    const [rating, setRating] = useState(0);

    // Estado para almacenar la calificación en la que el mouse está actualmente
    const [hover, setHover] = useState(0);

    // Función para manejar el clic en una estrella
    function handleClick(getCurrentIndex) {
        // Actualiza el estado 'rating' con la calificación seleccionada
        setRating(getCurrentIndex);
    }

    // Función para manejar el evento cuando el mouse entra en una estrella
    function handleMouseEnter(getCurrentIndex) {
        // Actualiza el estado 'hover' con el índice de la estrella en la que está el mouse
        setHover(getCurrentIndex);
    }

    // Función para manejar el evento cuando el mouse sale de una estrella
    function handleMouseLeave() {
        // Restaura el estado 'hover' a la calificación actual
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {/* Crea un arreglo con el número de estrellas y luego mapea sobre él */}
            {/* El uso del carácter de subrayado (_) en el método map es una convención común en JavaScript para indicar que un argumento no se utiliza dentro de la función de mapeo. El carácter de subrayado se utiliza para mostrar que el primer argumento (que representa el elemento actual en la iteración) no es relevante o no se va a utilizar. */}
            {[...Array(noOfStars)].map((_, index) => {
                // Ajusta el índice para que comience en 1
                index += 1;

                return (
                    <FaStar
                        // Utiliza el índice como clave para cada estrella
                        key={index}
                        // Determina la clase de la estrella según si está activa o inactiva
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        // Maneja el clic en la estrella para establecer la calificación
                        onClick={() => handleClick(index)}
                        // Maneja el evento de movimiento del mouse sobre la estrella
                        onMouseMove={() => handleMouseEnter(index)}
                        // Maneja el evento de salida del mouse de la estrella
                        onMouseLeave={() => handleMouseLeave()}
                        // La propiedad size establece el tamaño de la estrella (en pixeles)
                        size={40}
                    />
                );
            })}
        </div>
    );
}