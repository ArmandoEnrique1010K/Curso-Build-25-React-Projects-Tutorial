// Importa useState para manejar el estado local.
import { useState } from "react";
// Importa el componente MenuList para renderizar submenús.
import MenuList from "./MenuList";
// Importa íconos de Font Awesome para expandir/colapsar menús.
// npm install react-icons --save
import { FaMinus, FaPlus } from 'react-icons/fa'

// Componente MenuItem que renderiza un ítem de menú y controla la visualización de sus submenús.
export default function MenuItem({ item }) {
    // Estado local para manejar si los submenús de un ítem específico se están mostrando o no.
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    // Función que cambia el estado para mostrar u ocultar los submenús de un ítem dado.
    function handleToggleChildren(getCurrentlabel) {
        // Actualiza el estado: invierte el valor booleano para el ítem actual (abierto/cerrado).
        setDisplayCurrentChildren({
            // Copia el estado actual.
            ...displayCurrentChildren,
            // Invierte el valor del ítem actual.
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
    }

    // Muestra en consola el estado actual de displayCurrentChildren para depuración.
    console.log(displayCurrentChildren);

    return (
        <li>
            {/* Contenedor del ítem de menú */}
            <div className="menu-item">
                {/* Muestra la etiqueta del ítem de menú */}
                <p>{item.label}</p>

                {/* Si el ítem tiene submenús (children), muestra el ícono + o - según el estado de expansión. */}
                {item && item.children && item.children.length ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {/* Cambia el ícono dependiendo si el submenú está visible o no */}
                        {
                            displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                        }
                    </span>
                ) : null}
            </div>

            {/* Si el ítem tiene submenús y estos están visibles, renderiza una lista anidada de submenús */}
            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                // Renderiza los submenús usando el componente MenuList.
                <MenuList list={item.children} />
            ) : null}
        </li>
    );
}