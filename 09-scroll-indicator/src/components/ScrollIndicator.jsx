import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
    // Define los estados para almacenar los datos, el estado de carga, mensajes de error, y porcentaje de scroll
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Función para obtener los datos desde la URL proporcionada
    async function fetchData(getUrl) {
        try {
            // Inicia la carga
            setLoading(true);
            // Realiza la solicitud a la API
            const response = await fetch(getUrl);
            // Convierte la respuesta en JSON
            const data = await response.json();

            // Verifica si hay datos válidos
            if (data && data.products && data.products.length > 0) {
                // Actualiza el estado con los datos recibidos
                setData(data.products);
                // Finaliza la carga
                setLoading(false);
            }
        } catch (e) {
            // Muestra el error en la consola
            console.log(e);
            // Establece el mensaje de error 
            setErrorMessage(e.message);
        }
    }

    // useEffect que se ejecuta cuando cambia la URL para cargar los datos
    useEffect(() => {
        fetchData(url);
    }, [url]);

    // Muestra los datos en la consola cuando estos cambian
    useEffect(() => {
        console.log(data);
    }, [data]);

    // Función para calcular el porcentaje de scroll
    function handleScrollPercentage() {

        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight
        // );

        // Calcula cuánto se ha desplazado el usuario en la página
        const howMuchScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;

        // Calcula la altura total del documento menos la altura de la ventana visible
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // Actualiza el estado con el porcentaje de scroll actual
        setScrollPercentage((howMuchScrolled / height) * 100);

        // Imprime los mensajes en la consola (solo para pruebas)
        // console.log("Empieza en: " + document.body.scrollTop);
        console.log("Se ha desplazado: " + document.documentElement.scrollTop);
        console.log("Altura total del documento: " + document.documentElement.scrollHeight);
        console.log("Altura de la ventana visible: " + document.documentElement.clientHeight);
    }

    // useEffect que agrega un listener al evento "scroll" para actualizar el porcentaje de scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    // Muestra el porcentaje de scroll en la consola
    console.log("Porcentaje de scroll (%): " + scrollPercentage);

    // Muestra un mensaje de error si ocurrió un error al cargar los datos
    if (errorMessage) {
        return <div>Error ! {errorMessage}</div>;
    }

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Loading data ! Pleaae wait</div>;
    }

    // Renderiza el contenido de la aplicación
    return (
        <div>
            {/* Contenedor superior que muestra el título y el progreso del scroll */}
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        // Ajusta el ancho de la barra según el porcentaje de scroll
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>

            {/* Muestra los datos obtenidos */}
            <div className="data-container">
                {data && data.length > 0
                    // Muestra cada producto
                    ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );
}