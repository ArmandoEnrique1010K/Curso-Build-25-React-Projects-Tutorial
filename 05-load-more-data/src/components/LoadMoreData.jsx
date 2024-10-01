import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
    // Estado para controlar si los datos están cargando
    const [loading, setLoading] = useState(false);

    // Estado para almacenar los productos obtenidos desde la API
    const [products, setProducts] = useState([]);

    // Estado para controlar el número de veces que se ha hecho clic en "Load More"
    const [count, setCount] = useState(0);

    // Estado para deshabilitar el botón cuando se han cargado todos los productos
    const [disableButton, setDisableButton] = useState(false);

    // Función asincrónica para obtener productos desde la API
    async function fetchProducts() {
        try {
            // Establece el estado de "loading" a true mientras los datos se están cargando
            setLoading(true);

            // Llamada a la API, usando la variable "count" para manejar la paginación
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );

            // Convierte la respuesta en JSON
            const result = await response.json();

            // Si la respuesta contiene productos, los agregamos al estado actual de productos
            if (result && result.products && result.products.length) {
                // Usamos el "spread operator" para combinar los productos anteriores con los nuevos
                setProducts((prevData) => [...prevData, ...result.products]);

                // Cambiamos el estado de "loading" a false para indicar que se ha completado la carga
                setLoading(false);
            }

            // Imprime los resultados en la consola para depuración
            console.log(result);
        } catch (e) {
            // En caso de error, lo mostramos en la consola y cambiamos el estado de "loading" a false
            console.log(e);
            setLoading(false);
        }
    }

    // Este efecto se ejecuta cada vez que cambia "count" para cargar más productos
    useEffect(() => {
        // Llama a la función fetchProducts cuando se cambia el estado de "count"
        fetchProducts();
        // El efecto depende de "count", por lo que se ejecuta cuando este cambia
    }, [count]);

    // Este efecto se ejecuta cada vez que cambian los productos
    useEffect(() => {
        // Si ya se han cargado 100 productos, deshabilitamos el botón de "Load More"
        if (products && products.length === 100) setDisableButton(true);
        // El efecto depende de "products", por lo que se ejecuta cuando la lista de productos cambia
    }, [products]);

    // Si los datos están cargando, mostramos un mensaje de "Loading"
    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {/* Si hay productos, los mostramos en pantalla */}
                {products && products.length
                    ? products.map((item) => (
                        <div className="product" key={item.id}>
                            {/* Imagen del producto */}
                            <img src={item.thumbnail} alt={item.title} />
                            {/* Título del producto */}
                            <p>{item.title}</p>
                        </div>
                    ))
                    // Si no hay productos, no mostramos nada
                    : null}
            </div>
            <div className="button-container">
                {/* Botón para cargar más productos, deshabilitado si ya se alcanzaron los 100 */}
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                    Load More Products
                </button>
                {/* Mensaje que indica que se ha alcanzado el límite de 100 productos */}
                {disableButton ? <p>You have reached to 100 products</p> : null}
            </div>
        </div>
    );
}