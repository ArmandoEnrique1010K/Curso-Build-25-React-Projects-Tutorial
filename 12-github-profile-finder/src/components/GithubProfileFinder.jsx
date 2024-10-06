import { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder() {
    // Estado para almacenar el nombre de usuario ingresado
    const [userName, setUserName] = useState("ArmandoEnrique1010K");
    // Estado para almacenar los datos del usuario de GitHub
    const [userData, setUserData] = useState(null);
    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(true);

    // Función asíncrona para obtener los datos del usuario de GitHub
    async function fetchGithubUserData() {
        // Establece el estado de carga a verdadero
        setLoading(true);
        // Llama a la API de GitHub para obtener datos del usuario
        const res = await fetch(`https://api.github.com/users/${userName}`);

        // Convierte la respuesta a JSON
        const data = await res.json();
        if (data) {
            // Almacena los datos del usuario en el estado
            setUserData(data);
            // Establece el estado de carga a falso
            setLoading(false);
            // Limpia el campo de entrada después de la búsqueda
            setUserName('');
        }
    }

    // Maneja el evento de envío para buscar el usuario
    function handleSubmit() {
        // Llama a la función para obtener los datos del usuario
        fetchGithubUserData();
    }

    // Efecto secundario para cargar los datos del usuario al montar el componente
    useEffect(() => {
        // Llama a la función para obtener los datos del usuario al cargar
        fetchGithubUserData();
        // El arreglo vacío asegura que se ejecute solo una vez al montar
    }, []);

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <h1>Loading data ! Please wait</h1>;
    }

    // Renderiza el contenedor principal con el campo de búsqueda y el resultado
    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    // Nombre del campo de entrada
                    name="search-by-username"
                    // Tipo de entrada
                    type="text"
                    // Texto de marcador
                    placeholder="Search Github Username..."
                    // Valor del estado de nombre de usuario
                    value={userName}
                    // Actualiza el estado al cambiar el valor
                    onChange={(event) => setUserName(event.target.value)}
                />

                {/* Botón para buscar */}
                <button onClick={handleSubmit}>Search</button>
            </div>

            {/* Muestra el componente User si hay datos de usuario */}
            {userData !== null ? <User user={userData} /> : null}
        </div>
    );
}