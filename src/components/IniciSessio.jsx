import { datosusuarioJSON } from "./Localstorage";
import { useContext } from 'react';

import  UserContext  from './UserContext.jsx';
export default function Login() {
    const {user, setUser} = useContext(UserContext);
    
    console.log('login cargado');
    const datos_Usuario = datosusuarioJSON;
    console.log(datos_Usuario);

    function iniciarSesion(event) {
        event.preventDefault();

        // 1. Capturamos los datos de los inputs
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#pass').value;

        // 2. Buscamos el usuario en el JSON
        const usuario = datos_Usuario.find((u) => u.email === email && u.password === password);
        // 3. Si el usuario existe, lo almacenamos en el estado


        if (usuario) {
            setUser(usuario);
            console.log(user);
            // Almacenamos el usuario en el localStorage para persistir la sesión
            localStorage.setItem('user', JSON.stringify(usuario));



            alert('Sesión iniciada correctamente');


            
            
            
        } else {
            alert('Usuario o contraseña incorrectos');
            // Mostrar un mensaje de error en los inputs
            document.querySelector('#email').value = '';
            document.querySelector('#pass').value = '';
        }
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            
        
        <div className="container mt-5">
            <div className="pt-5">
                <h1 className="w-100 text-center">Login</h1>
                <form action="" className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: '400px' }} onSubmit={iniciarSesion}>
                    <label htmlFor="email" className="mt-2 form-label">User: </label>
                    <input type="text" className="form-control" placeholder="usuario@mail.com" id="email" />
                    
                    <label htmlFor="pass" className="mt-2 form-label">Contraseña: </label>
                    <input type="password" className="form-control" id="pass" />
                    
                    <input type="submit" className="mt-4 w-100 btn btn-primary" value="Entrar" />
                </form>
            </div>
        </div>
        </UserContext.Provider>
        
    );
}
