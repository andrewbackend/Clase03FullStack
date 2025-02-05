/*
Supongamos que quieras pedir un taxi por una aplicación
*/


/*
Cuando envías un paquete por un servicio de mensajería, hay tres posible estados:
    - Pendiente
    - Resuelta
    - Rechazada
*/

/*
Hacer una reservación en un restaurante
*/

/*
Subir una foto a una red social
*/
const subirFoto = new Promise((resolve, reject) => {
    let conexionEstable = false; //Cambia a false para probar el rechazo

    if(conexionEstable){
        resolve("Foto subida exitosamente a tu perfil");
    }else{
        reject("Error al subir la foto. Verifica tu conexión");
    }
});


//Usar la promesa
subirFoto
    .then((mensaje) => {
        console.log(mensaje); //Maneja el éxito
    })
    .catch((error) => {
        console.error(error); //Maneja el error
    });


/*
Asistir a una entrevista de trabajo
*/