// Importa el componente MenuItem desde el archivo './MenuItem'
import MenuItem from "./MenuItem";

// Componente MenuList, que recibe una lista de elementos de menú (list) como prop. 
// Por defecto, si no se pasa ninguna lista, será un array vacío.
export default function MenuList({ list = [] }) {
    return (
        // Contenedor del listado de menús. Se utiliza una lista desordenada (ul) con una clase CSS "menu-list-container".
        <ul className="menu-list-container">
            {/* Si la lista (list) está definida y tiene elementos, mapea cada elemento en la lista y renderiza un componente MenuItem para cada uno. */}
            {list && list.length
                ? list.map((listItem) => (
                    // El componente MenuItem recibe cada elemento de la lista (listItem) como prop "item".
                    // La propiedad "key" es única para cada elemento y usa el "label" como identificador.
                    <MenuItem key={listItem.label} item={listItem} />
                ))

                // Si no hay elementos en la lista, no se renderiza nada.
                : null}
        </ul>
    );
}
