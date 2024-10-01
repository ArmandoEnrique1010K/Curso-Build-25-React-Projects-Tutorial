// Importa el componente MenuList desde el archivo './MenuList'
import MenuList from './MenuList';
// Importa los estilos desde el archivo './styles.css'
import './styles.css'

// Componente principal TreeView, que recibe el array 'menus' como prop (por defecto es un array vacío)
export default function TreeView({ menus = [] }) {
    return (
        // Contenedor principal para la vista en árbol con la clase CSS "tree-view-container"
        <div className="tree-view-container">
            {/* Renderiza el componente MenuList, pasándole la lista de menús (menus) como propiedad */}
            <MenuList list={menus} />
        </div>
    );
}
