import { datosusuarioJSON } from "./Localstorage";
export default function Registre(){
    console.log('registre cargado');
    const datos_Usuario = datosusuarioJSON;
    console.log(datos_Usuario);
    function agregarusuario() {
        const id = datos_Usuario.length + 1;
        const email = document.querySelector('#correo').value;
        const password = document.querySelector('#password').
        value;
        const usuario = email.split('@')[0];
        datos_Usuario.forEach((usuario) => {
            if (usuario.email === email) {
                alert('El usuario ya existe');
                return;
            }
        });
        const rol = 'usuario';
        if (!datos_Usuario.find(usuario => usuario.email === email)) {
            datos_Usuario.push({ id,usuario, email, password,rol });
            console.log(datos_Usuario);
            localStorage.setItem('datos_usuario', JSON.stringify(datos_Usuario));
            alert('Usuario registrado con éxito');
        } else {
            alert('El usuario ya existe');

            
        }
    }

        
            return (
                <div className="container mt-5">
                    <div className="pt-5">
                        <h1 className="w-100 text-center">Registro</h1>
                        <form action="" className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: '400px' }}>
                            <label htmlFor="email" className="mt-2 form-label">User: </label>
                            <input type="text" className="form-control" placeholder="usuario@mail.com" id="correo"/>
                            
                            <label htmlFor="pass" className="mt-2 form-label">Contraseña: </label>
                            <input type="password" className="form-control" id="password" />
                            
                            <input type="" className="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar" onClick={agregarusuario}/>
                        </form>
                    </div>
                </div>
            );
        }
    

