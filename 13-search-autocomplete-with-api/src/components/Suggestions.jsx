// Componente que renderiza las sugerencias de usuarios basadas en la búsqueda
export default function Suggestions({ data, handleClick }) {
    return (
        <ul>
            {/* Verifica si hay datos disponibles para mostrar */}
            {data && data.length
                ? // Mapea los elementos de los datos filtrados y los renderiza como una lista de elementos
                data.map((item, index) => (
                    <li onClick={handleClick} key={index}>
                        {/* Muestra el nombre del usuario como un elemento de la lista */}
                        {item}
                    </li>
                ))
                : null // Si no hay datos, no muestra nada
            }
        </ul>
    );
}
