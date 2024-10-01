// Importa el componente TreeView desde su directorio de componentes
import TreeView from './components/TreeView';
// Importa la estructura de menús desde el archivo menus
import menus from './components/menus';

// Define el componente principal de la aplicación
function App() {
  return (
    // Renderiza el componente TreeView y le pasa la lista de menús como prop
    <TreeView menus={menus} />
  );
}

// Exporta el componente App para que pueda ser utilizado en otras partes de la aplicación
export default App;
