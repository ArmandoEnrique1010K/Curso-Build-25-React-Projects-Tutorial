import { useEffect, useState } from "react";
import Suggestions from "./Suggestions.jsx";

// Componente principal para la funcionalidad de búsqueda con autocompletado
export default function SearchAutocompleteWithApi() {
    // Estado para gestionar si los datos están cargando
    const [loading, setLoading] = useState(false);
    // Estado para almacenar la lista de usuarios obtenida desde la API
    const [users, setUsers] = useState([]);
    // Estado para manejar cualquier error que ocurra durante la obtención de datos
    const [error, setError] = useState(null);
    // Estado para almacenar el valor del parámetro de búsqueda introducido por el usuario
    const [searchParam, setSearchParam] = useState("");
    // Estado para controlar si se muestra el menú desplegable de sugerencias
    const [showDropdown, setShowDropdown] = useState(false);
    // Estado para almacenar los usuarios filtrados basados en el término de búsqueda
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Función para manejar el cambio de texto en el campo de entrada
    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        // Si el término de búsqueda tiene más de un carácter, filtra los usuarios
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            // Oculta el menú desplegable si el término de búsqueda es corto
            setShowDropdown(false);
        }
    }

    // Función para manejar el clic en una sugerencia del menú desplegable
    function handleClick(event) {
        // Oculta el menú desplegable
        setShowDropdown(false);
        // Establece el valor del campo de búsqueda al valor seleccionado
        setSearchParam(event.target.innerText);
        // Limpia la lista de usuarios filtrados
        setFilteredUsers([]);
    }

    // Función para obtener la lista de usuarios desde la API
    async function fetchListOfUsers() {
        try {
            // Muestra que la carga está en progreso
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            // Si los datos son válidos, actualiza el estado con la lista de usuarios
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                // Indica que la carga ha terminado
                setLoading(false);
                // Resetea cualquier error previo
                setError(null);
            }
        } catch (error) {
            // Indica que la carga ha terminado
            setLoading(false);
            // Muestra el error en la consola
            console.log(error);
            // Actualiza el estado de error con el error recibido
            setError(error);
        }
    }

    // Hook useEffect para obtener la lista de usuarios al cargar el componente
    useEffect(() => {
        fetchListOfUsers();
    }, []);

    // Renderiza la interfaz de usuario del componente
    return (
        <div style={{ textAlign: "center" }}>
            {loading ? (
                // Muestra un mensaje de carga mientras se obtienen los datos
                <h1>Loading Data ! Please wait</h1>
            ) : (
                // Campo de entrada para buscar usuarios
                <input
                    value={searchParam}
                    name="search-users"
                    placeholder="Search Users here..."
                    onChange={handleChange}
                />
            )}

            {/* Muestra el componente Suggestions si hay usuarios filtrados */}
            {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}

            {/* Muestra el error si hay algun error */}
            {error}
        </div>
    );
}
