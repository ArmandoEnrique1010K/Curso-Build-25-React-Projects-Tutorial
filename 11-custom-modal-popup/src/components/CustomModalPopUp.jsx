import { useState } from "react";
import "./modal.css";
import Modal from "./Modal";

export default function CustomModalPopUp() {
    // Estado que determina si el modal debe ser visible o no
    const [showModalPopup, setShowModalPopup] = useState(false);

    // Función para alternar la visibilidad del modal
    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup); // Cambia el estado a su opuesto
    }

    // Función que se ejecuta cuando se cierra el modal
    function onClose() {
        setShowModalPopup(false); // Establece el estado para ocultar el modal
    }

    return (
        <div className="container">
            {/* Botón para abrir el modal */}
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>

            {/* Condicionalmente renderiza el modal si showModalPopup es true */}
            {showModalPopup && (
                <Modal
                    // ID del modal
                    id={"custom-id"}
                    // Contenido del encabezado del modal
                    header={<p>Customized Header</p>}
                    // Contenido del pie del modal
                    footer={<p>Customized Footer</p>}
                    // Función que se llama al cerrar el modal
                    onClose={onClose}
                    // Contenido del cuerpo del modal
                    body={<p>Customized body</p>}
                />
            )}
        </div>
    );

}