/*
Crear un ejemplo de una promesas que evalúe una condición (exito) y retorne 
un mensaje si la operación fue existosa o un error si falló, gestionando ambos 
casos con el uso de .then() y .catch().
*/

const promesaEjemplo = new Promise((resolve, reject) => {
    let exito = false; //Cambia a false para probar el rechazo

    if(exito){
        resolve("La operación fue exitosa");
    }else{
        reject("Hubo un error en la operación");
    }
});

//Usar la promesa
promesaEjemplo
    .then((resultado) => {
        console.log(resultado); //Maneja el éxito
    })
    .catch((error) => {
        console.error(error); //Maneja el error
    });
