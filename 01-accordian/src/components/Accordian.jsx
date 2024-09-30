import { useState } from "react";
// Importamos los datos del archivo data.js
import data from "./data";
// Importamos los estilos
import "./styles.css";

export default function Accordian() {
    // Estado para manejar la selección única de un ítem en el acordeón
    const [selected, setSelected] = useState(null);

    // Estado para habilitar o deshabilitar la selección múltiple
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    // Estado para manejar los ítems seleccionados en la opción de selección múltiple
    const [multiple, setMultiple] = useState([]);

    // Función para manejar la selección individual en el acordeón
    function handleSingleSelection(getCurrentId) {
        // Si el id del ítem actual es igual al seleccionado, se deselecciona; si no, se selecciona
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    // Función para manejar la selección múltiple de ítems
    function handleMultiSelection(getCurrentId) {
        // Hacemos una copia del estado `multiple` para no mutar el estado directamente
        let cpyMutiple = [...multiple];
        // Buscamos si el id actual ya está en la lista de seleccionados
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);

        // Si el id no está en la lista de seleccionados, lo agregamos
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        // Si el id ya está en la lista, lo eliminamos
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        // Actualizamos el estado con la nueva lista de seleccionados
        setMultiple(cpyMutiple);
    }

    // Imprimimos el ítem seleccionado y los múltiples seleccionados para depuración
    console.log(selected, multiple);

    return (
        <div className="acc-wrapper">
            {/* Botón para habilitar o deshabilitar la selección múltiple */}
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {
                    // Muestra el texto del botón según el estado actual
                    // Si 'enableMultiSelection' es falso, muestra "Enable Multi Selection"
                    // Si 'enableMultiSelection' es verdadero, muestra "Disable Multi Selection"
                    enableMultiSelection === false ? "Enable Multi Selection" : "Disable Multi Selection"
                }
            </button>

            {/* Contenedor del acordeón */}
            <div className="accordian">
                {/* Si hay datos en el array data, renderizamos los ítems del acordeón */}
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            {/* Al hacer clic en el título del ítem, se maneja la selección única o múltiple */}
                            <div
                                onClick={
                                    // Llama a una función según el estado actual (si no tiene un valor se considera verdadero)
                                    enableMultiSelection
                                        ?
                                        // Si es verdadero, llama a la función de seleccion múltiple
                                        () => handleMultiSelection(dataItem.id)
                                        // De lo contrario, llama a la función de selección individual
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                {/* Renderizamos la pregunta (título) de cada ítem */}
                                <h3>{dataItem.question}</h3>
                                {/* Símbolo de colapsar o expandir */}
                                <span>+</span>
                            </div>

                            {/* Si la selección múltiple está habilitada y el ítem está seleccionado, mostramos el contenido */}
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )
                                // Si la selección única está habilitada y el ítem actual está seleccionado, mostramos el contenido
                                : selected === dataItem.id && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )}
                        </div>
                    ))
                ) : (
                    // Si no hay datos, mostramos un mensaje de error
                    <div> No data found !</div>
                )}
            </div>
        </div >
    );
}