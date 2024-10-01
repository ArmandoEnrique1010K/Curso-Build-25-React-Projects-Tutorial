// Importa el hook useState de React
import { useState } from "react";
// Importa los datos del archivo data.js
import data from "./data";
// Importa los estilos
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
        // Realiza una copia del estado `multiple` para no mutar el estado directamente
        let cpyMutiple = [...multiple];
        // Busca si el id actual ya está en la lista de seleccionados
        // El método indexOf de las instancias de Arreglos, devuelve el primer índice en el que se puede encontrar un elemento determinado en el arreglo o "-1" si no está presente.
        // indexOf(searchElement, fromIndex)
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);

        // Si el id no está en la lista de seleccionados, se agrega
        // El método push de las instancias de Arreglos agrega los elementos especificados al final de un arreglo y devuelve la nueva longitud del arreglo.
        // push(element1, element2, /* …, */ elementN)
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        // Si el id ya está en la lista, se elimina
        // El método splice de las instancias de Arreglos cambia el contenido de un arreglo eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
        // splice(start, deleteCount, item1, item2, /* …, */ itemN)
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        // Actualiza el estado con la nueva lista de seleccionados
        setMultiple(cpyMutiple);
    }

    // Imprime el ítem seleccionado y los múltiples seleccionados para depuración
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
                {/* Si hay datos en el arreglo data, se renderiza los ítems del acordeón */}
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
                                {/* Renderiza la pregunta (título) de cada ítem */}
                                <h3>{dataItem.question}</h3>
                                {/* Símbolo de colapsar o expandir */}
                                <span>+</span>
                            </div>

                            {/* Si la selección múltiple está habilitada y el ítem está seleccionado, se muestra el contenido */}
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )
                                // Si la selección única está habilitada y el ítem actual está seleccionado, se muestra el contenido
                                : selected === dataItem.id && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )}
                        </div>
                    ))
                ) : (
                    // Si no hay datos, se muestra un mensaje de error
                    <div> No data found !</div>
                )}
            </div>
        </div >
    );
}