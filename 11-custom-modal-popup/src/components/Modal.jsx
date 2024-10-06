export default function Modal({ id, header, body, footer, onClose }) {
    return (
        // Contenedor principal del modal, usa el id proporcionado o un valor predeterminado
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                    {/* Icono para cerrar el modal; llama a onClose al hacer clic */}
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    {/* Muestra el encabezado proporcionado o un valor predeterminado */}
                    <h1>{header ? header : "Header"}</h1>
                </div>
                <div className="body">
                    {/* Muestra el contenido del cuerpo proporcionado o un valor predeterminado */}
                    {body ? (
                        body
                    ) : (
                        <div>
                            {/* Texto predeterminado para el cuerpo */}
                            <p>This is our Modal Body</p>
                        </div>
                    )}
                </div>
                {/* Muestra el pie proporcionado o un valor predeterminado */}
                <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
            </div>
        </div>
    );
}