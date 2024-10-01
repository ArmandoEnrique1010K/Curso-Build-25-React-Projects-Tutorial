// Importa el hook useState de React
import { useState } from "react";
// Importa el componente QRCode de la biblioteca
// Asegúrate de tener instalada la biblioteca react-qr-code
// npm i react-qr-code 
import QRCode from "react-qr-code";


export default function QRCodeGenerator() {
    // Estado para almacenar el valor del código QR
    const [qrCode, setQrCode] = useState("");

    // Estado para almacenar el valor ingresado en el input
    const [input, setInput] = useState("");

    // Función para manejar la generación del código QR
    function handleGenerateQrCode() {
        // Actualiza el estado qrCode con el valor del input
        setQrCode(input);
        // Limpia el input después de generar el código QR
        setInput('');
    }


    return (
        // Centra el contenido
        <div style={{ textAlign: "center" }}>
            {/* Título del generador de códigos QR */}
            <h1>QR Code Generator</h1>

            {/* Espaciado inferior */}
            <div style={{ marginBottom: 20 }}>
                <input
                    // Actualiza el estado input al cambiar el valor del input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    // Establece el valor del input
                    value={input}
                    // Texto de marcador de posición
                    placeholder="Enter your value here"
                />
                <button
                    // Deshabilita el botón si el input está vacío o solo contiene espacios
                    disabled={input && input.trim() !== "" ? false : true}
                    // Llama a la función para generar el código QR al hacer clic
                    onClick={handleGenerateQrCode}
                >
                    {/* Texto del botón */}
                    Generate
                </button>
            </div>
            <div>
                {/* Renderiza el código QR con el valor ingresado, tamaño y color de fondo */}
                <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
            </div>
        </div >
    );
}