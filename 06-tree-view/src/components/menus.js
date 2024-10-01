// Definición de un arreglo de objetos llamado 'menus', que contiene los elementos del menú de navegación
export const menus = [
  {
    // Etiqueta del menú principal 'Home', que redirige a la ruta raíz "/"
    label: "Home",
    to: "/",
  },
  {
    // Menú principal 'Profile' con un enlace a "/profile"
    label: "Profile",
    to: "/profile",
    // El menú 'Profile' tiene un submenú llamado 'Details'
    children: [
      {
        // El submenú 'Details' tiene a su vez otro submenú llamado 'Location
        label: "Details",
        to: "/details",
        children: [
          {
            // El submenú 'Location' tiene un submenú final llamado 'City'
            label: "Location",
            to: "/location",
            children: [
              {
                label: "City",
                // Redirige a "/city"
                to: "/city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // Menú principal 'Settings' con un enlace a "/settings"
    label: "Settings",
    to: "/settings",
    // El menú 'Settings' tiene dos submenús: 'Account' y 'Security'
    children: [
      {
        label: "Account",
        // Enlace a "/account"
        to: "/account",
      },
      {
        label: "Security",
        // Enlace a "/security"
        to: "/security",
        // El submenú 'Security' tiene otros dos submenús: 'Login' y 'Register'
        children: [
          {
            label: "Login",
            // Enlace a "/login"
            to: "/login",
          },
          {
            label: "Register",
            // Enlace a "/register"
            to: "/register",
            // El submenú 'Register' tiene un submenú final llamado 'Random data'
            children: [
              {
                label: "Random data",
                // El enlace está vacío, lo que podría representar un enlace sin ruta definida
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
