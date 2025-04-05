import { createContext } from "react";

const UserContext = createContext({
    user: null, // Usuario actual
    setUser: () => {}, // Función para actualizar el usuario
});

export default UserContext;