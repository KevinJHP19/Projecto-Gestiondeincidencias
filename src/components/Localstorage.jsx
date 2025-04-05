const datos_tickets =[
    {
      id:1,
      codigo: 123457,
      fecha: "15/04/2023",
      fecha_resuelto:"15/05/2023",
      aula: "T7",
      grupo: "DAW2",
      ordenador: "PC1",
      descripcion: "Problema de conexión a Internet",
      alumno: "Juan Pérez",
      resuelto:true

    },
    {
      id:2,
      codigo:123458,
      fecha: "17/04/2023",
      fecha_resuelto:"15/05/2023",
      aula: "T8",
      grupo: "DAW1",
      ordenador: "PC2",
      descripcion: "Pantalla en blanco",
      alumno: "Juan Rodríguez",
      resuelto:true

    },
    {
      id:3,
      codigo: 123459,
      fecha: "18/04/2023",
      fecha_resuelto:"15/05/2023",
      aula: "T8",
      grupo: "DAW1",
      ordenador: "PC3",
      descripcion: "Error de impresora",
      alumno: "Ana Martínez",
      resuelto:true
    },
    {
        id: 4,
        codigo: 123459,
        fecha: "18/04/2023",
        aula: "T6",
        grupo: "DAW1",
        ordenador: "PC3",
        descripcion: "Error de impresora",
        alumno: "Ana Martínez",
        resuelto:false
    },
    {
        id: 5,
        codigo: 123460,
        fecha: "19/04/2023",
        aula: "T8",
        grupo: "DAW2",
        ordenador: "PC4",
        descripcion: "Problema de acceso a archivos",
        alumno: "Pedro Gómez",
        resuelto:false
    },
    {
        id: 6,
        codigo: 123461,
        fecha: "20/04/2023",
        aula: "T6",
        grupo: "DAW1",
        ordenador: "PC1",
        descripcion: "Aplicación se cierra inesperadamente",
        alumno: "Sofía Fernández",
        resuelto:false
    },
    {
      id:7,
      codigo: 123462,
      fecha: "21/04/2023",
      aula: "T7",
      grupo: "DAW2",
      ordenador: "PC2",
      descripcion: "Problema de conexión a la red",
      alumno: "Luis Torres",
      resuelto: false
    },
    {
      id:8,
      codigo: 123463,
      fecha: "22/04/2023",
      aula: "T8",
      grupo: "DAW1",
      ordenador: "PC3",
      descripcion: "Archivos corruptos",
      alumno: "Carolina Ramírez",
      resuelto: false
    }
    

]
  const datos_usuario = [
    {
        id: 1,
        usuario: "Juan Pérez",
        email: "Juan@gmail.com",
        password: "1234",
        rol:"Administrador"
    },
    {
        id: 2,
        usuario: "Pedro Gómez",
        email: "Pedro@gmail.com",
        password: "5678",
        rol:"Usuario"
    },
    {
        id: 3,
        usuario: "Ana Martínez",
        email: "Ana@gmail.com",
        password: "ana",
        rol:"Usuario"
    },
    {
        id: 4,
        usuario: "Sofía Fernández",
        email: "Sofia@gmail.com",
        password: "sofia",
        rol:"Usuario"
    },
    {
        id: 5,
        usuario: "Luis Torres",
        email: "Luis@gmail.com",
        password: "luis",
        rol:"Usuario"
    },
    {
        id: 6,
        usuario: "Carolina Ramírez",
        email: "Carolina@gmail.com",
        password: "carolina",
        rol:"Profesor"
    }
        
    

  ]
  const comentarios =[
    {
        id: 1,
        ticket_id: 4,
        usuario: "Juan Pérez",
        fecha: "15/04/2023",
        comentario: "El problema persiste"
    },
    {
        id: 2,
        ticket_id: 4,
        usuario: "Pedro Gómez",
        fecha: "17/04/2023",
        comentario: "La solución parece ser cambiar el firmware"
    },
    {
        id: 3,
        ticket_id: 5,
        usuario: "Ana Martínez",
        fecha: "18/04/2023",
        comentario: "El problema sigue persistiendo"
    },
    {
      id: 4,
        ticket_id: 6,
        usuario: "Sofía Fernández",
        fecha: "20/04/2023",
        comentario: "El problema persiste",
        rol:"usuario"
    },
    {
      id: 5,
        ticket_id: 7,
        usuario: "Luis Torres",
        fecha: "21/04/2023",
        comentario: "El problema persiste",
        rol:"usuario"
    },
    {
      id: 6,
        ticket_id: 8,
        usuario: "Carolina Ramírez",
        fecha: "22/04/2023",
        comentario: "El problema persiste",
        rol:"usuario"
    },
    {
      id: 7,
        ticket_id: 1,
        usuario: "Carolina Ramírez",
        fecha: "23/04/2023",
        comentario: "El problema ha sido resuelto",
        rol:"usuario"
    },
    {
      id: 8,
        ticket_id: 2,
        usuario: "Carolina Ramírez",
        fecha: "24/04/2023",
        comentario: "El problema ha sido resuelto",
        rol:"usuario"
    },
    {
      id: 9,
        ticket_id: 3,
        usuario: "Carolina Ramírez",
        fecha: "25/04/2023",
        comentario: "El problema ha sido resuelto",
        rol:"usuario"
    }

  ]
// Guardar en localStorage solo si no existen datos 
if (!localStorage.getItem('datos_tickets')) {
  localStorage.setItem('datos_tickets', JSON.stringify(datos_tickets));
}
if (!localStorage.getItem('datos_usuario')) {
  localStorage.setItem('datos_usuario', JSON.stringify(datos_usuario));
}
if (!localStorage.getItem('datos_comentarios')) {
  localStorage.setItem('datos_comentarios', JSON.stringify(comentarios));
}
// Recuperar datos de localStorage
let datosticketsJSON = JSON.parse(localStorage.getItem('datos_tickets'));

let datoscomentariosJSON = JSON.parse(localStorage.getItem('datos_comentarios'));

if(!datoscomentariosJSON){
  datoscomentariosJSON = [];
}
export { datoscomentariosJSON };
//devuelve un array vacio si el valor es null
if(!datosticketsJSON){
  datosticketsJSON = [];
}
//filtra los tickets que tu su estado es false
const ticketspendiente = datosticketsJSON.filter(ticket => ticket.resuelto === false);

//filtra los tickets que sus estado es true mostramos y exportamos
const ticketsresueltos = datosticketsJSON.filter(ticket => ticket.resuelto === true);

console.log(ticketsresueltos);
console.log(ticketspendiente);

export { ticketsresueltos, datosticketsJSON, ticketspendiente };
// Recuperar datos_usuarios del localStorage
let datosusuarioJSON = JSON.parse(localStorage.getItem('datos_usuario'));
if(!datosusuarioJSON){
  datosusuarioJSON = [];
}
console.log(datosusuarioJSON);

export { datosusuarioJSON }