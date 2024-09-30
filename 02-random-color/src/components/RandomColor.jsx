import { useEffect, useState } from "react";

export default function RandomColor() {
    // Estado para manejar el tipo de color: puede ser "hex" o "rgb"
    const [typeOfColor, setTypeOfColor] = useState("hex");

    // Estado para manejar el color generado
    const [color, setColor] = useState("#000000");

    // Función auxiliar que genera un número aleatorio basado en la longitud proporcionada
    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    // Función que genera un color aleatorio en formato HEX
    function handleCreateRandomHexColor() {
        // Array con valores permitidos en un código de color HEX
        // #678765
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        // Inicia con el símbolo de numeral (#) para un código HEX
        let hexColor = "#";

        // Genera 6 caracteres aleatorios para completar el color HEX
        for (let i = 0; i < 6; i++) {
            // Añade un valor aleatorio del array hex
            hexColor += hex[randomColorUtility(hex.length)];
        }

        // Actualiza el estado del color con el nuevo valor HEX
        setColor(hexColor);
    }

    // Función que genera un color aleatorio en formato RGB
    function handleCreateRandomRgbColor() {
        // Genera valores aleatorios para los componentes rojo (r), verde (g) y azul (b)
        // Valores entre 0 y 255
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        // Actualiza el estado del color con el nuevo valor RGB
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    // Hook de efecto que se ejecuta cada vez que cambia el tipo de color (typeOfColor)
    useEffect(() => {
        // Genera un color aleatorio en el formato correspondiente cuando cambia el tipo de color
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
        // El efecto depende de cambios en 'typeOfColor'
    }, [typeOfColor]);

    return (
        <div
            // Estilo del contenedor principal: ocupa toda la pantalla y tiene el color de fondo generado
            style={{
                width: "100vw",
                height: "100vh",
                // El color de fondo cambia dinámicamente
                background: color,
                margin: "auto",
            }}
        >
            {/* Contenedor para los botones de control */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Botón para cambiar el tipo de color a HEX */}
                <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>

                {/* Botón para cambiar el tipo de color a RGB */}
                <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>

                {/* Botón para generar un nuevo color aleatorio basado en el tipo de color actual */}
                <button
                    onClick={
                        typeOfColor === "hex"
                            ?
                            // Si el tipo es HEX, genera un color HEX
                            handleCreateRandomHexColor
                            :
                            // Si el tipo es RGB, genera un color RGB
                            handleCreateRandomRgbColor
                    }
                >
                    Generate Random Color
                </button>
            </div>

            {/* Contenedor para mostrar el tipo y el valor del color generado */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // Texto en blanco para que sea legible sobre el fondo
                    color: "#fff",
                    // Tamaño de fuente grande
                    fontSize: "60px",
                    marginTop: "50px",
                    // Los elementos se alinean en columna
                    flexDirection: 'column',
                    // Espacio entre los elementos
                    gap: '20px'
                }}
            >
                {/* Muestra si el color es RGB o HEX */}
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>

                {/* Muestra el valor del color generado */}
                <h1>{color}</h1>
            </div>
        </div>
    );
}