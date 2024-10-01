// Importa el hook personalizado para almacenamiento local
import useLocalStorage from './useLocalStorage';
// Importa el archivo CSS para aplicar estilos según el tema
import './theme.css'

export default function LightDarkMode() {
    // Usa el hook useLocalStorage para obtener y establecer el tema, con "dark" como valor predeterminado
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    // Función para alternar entre los temas claro y oscuro
    function handleToggleTheme() {
        // Cambia el tema: si es "light", cambia a "dark" y viceversa
        setTheme(theme === "light" ? "dark" : "light");
    }

    // Imprime el tema actual en la consola para depuración
    console.log(theme);

    return (
        // Aplica el tema como atributo data-theme
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                {/* Mensaje de bienvenida */}
                <p>Hello World !</p>

                {/* Botón para cambiar el tema */}
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}