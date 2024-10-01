import { useEffect } from "react";
import { useState } from "react";

// Hook personalizado para manejar el almacenamiento local
export default function useLocalStorage(key, defaultValue) {
  // Estado que almacena el valor actual del almacenamiento local
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // Intenta recuperar el valor del almacenamiento local y lo analiza como JSON
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      // Si hay un error al analizar, imprime el error y establece el valor predeterminado
      console.log(error);
      currentValue = defaultValue;
    }

    // Devuelve el valor recuperado o el valor predeterminado
    return currentValue;
  });

  useEffect(() => {
    // Siempre que 'value' cambie, actualiza el almacenamiento local con el nuevo valor
    localStorage.setItem(key, JSON.stringify(value));
    // Dependencias: se ejecuta cuando cambia 'key' o 'value'
  }, [key, value]);

  // Devuelve el valor actual y la función para actualizarlo
  return [value, setValue];
}
