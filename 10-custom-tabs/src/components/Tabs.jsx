// Importa useState para manejar el estado de la pestaña seleccionada
import { useState } from "react";

// Componente Tabs que recibe dos props: el contenido de las pestañas (tabsContent) y una función (onChange)
export default function Tabs({ tabsContent, onChange }) {
    // Estado para almacenar el índice de la pestaña activa
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    // Maneja el clic en una pestaña para cambiar la pestaña activa
    function handleOnClick(getCurrentIndex) {
        // Actualiza el estado con el nuevo índice de pestaña
        setCurrentTabIndex(getCurrentIndex);
        // Llama a la función onChange pasando el índice de la pestaña seleccionada
        onChange(getCurrentIndex);
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {/* Mapea cada elemento de las pestañas para mostrar su etiqueta */}
                {tabsContent.map((tabItem, index) => (
                    <div
                        // Añade la clase "active" si la pestaña es la seleccionada
                        className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                        // Asigna el evento de clic para cambiar de pestaña
                        onClick={() => handleOnClick(index)}
                        // Usa la etiqueta como key para cada pestaña
                        key={tabItem.label}
                    >
                        {/* Muestra la etiqueta de la pestaña */}
                        <span className="label">{tabItem.label}</span>
                    </div>
                ))}
            </div>

            <div className="content" style={{ color: "red" }}>
                {/* Muestra el contenido de la pestaña seleccionada */}
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}