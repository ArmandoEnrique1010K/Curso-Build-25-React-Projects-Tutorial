import Tabs from "./Tabs";
import './tabs.css';

// Un componente de ejemplo que representa algún contenido aleatorio
function RandomComponent() {
    return <h1>Some random content</h1>;
}

// Componente principal que maneja las pestañas de prueba
export default function TabTest() {

    // Define un arreglo de objetos donde cada objeto representa una pestaña con su etiqueta y contenido
    const tabs = [
        {
            // Etiqueta de la pestaña
            label: "Tab 1",
            // Contenido asociado a la pestaña
            content: <div>This is content for Tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>This is content for Tab 2</div>,
        },
        {
            label: "Tab 3",
            // El contenido asociado a la pestaña es el componente RandomComponent
            content: <RandomComponent />,
        },
    ];

    // Función para manejar el cambio de pestaña, recibe el índice de la pestaña seleccionada
    function handleChange(currentTabIndex) {
        // Imprime el índice de la pestaña seleccionada
        console.log(currentTabIndex);
    }

    // Renderiza el componente Tabs, pasándole las pestañas y la función de manejo de cambio de pestañas
    return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
