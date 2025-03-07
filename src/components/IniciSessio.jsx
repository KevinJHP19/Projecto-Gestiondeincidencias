import { datosusuarioJSON } from "./Localstorage";
export default function Login(){
    console.log('login cargado');
    const datos_Usuario = datosusuarioJSON;
    console.log(datos_Usuario);
    function iniciarSesion() {

        //1. Capturamos los datos de los imputs
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#pass').value;
        //2. Buscamos el usuario en el JSON

        const usuario = datos_Usuario.find((u) => u.email === email && u.password === password);

        if(usuario){
            alert('Sesión iniciada correctamente');
            
            
        }else{
            alert('Usuario o contraseña incorrectos');
            //Mostrar un mensaje de error en los inputs
            document.querySelector('#email').value = '';
            document.querySelector('#pass').value = '';
        }


    }
    return (
        <div className="container mt-5">
            <div className="pt-5">
                <h1 className="w-100 text-center">Login</h1>
                <form action="" className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: '400px' }}>
                    <label htmlFor="email" className="mt-2 form-label">User: </label>
                    <input type="text" className="form-control" placeholder="usuario@mail.com" id="email" />
                    
                    <label htmlFor="pass" className="mt-2 form-label">Contraseña: </label>
                    <input type="password" className="form-control" id="password"/>
                    
                    <input type="submit" className="mt-4 w-100 btn btn-primary" value="Entrar" onClick={iniciarSesion()} id="enviar" />
                </form>
            </div>
        </div>
    );
}