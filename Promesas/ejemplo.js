obtenerDatos((respuesta) => {
    procesarDatos(respuesta, (resultado) => {
        guardarDatos(resultado, (confirmacion) => {
            console.log("Datos guardados: ", confirmacion);
        });
    });
});

//Con Promesas
obtenerDatos()
    .then(procesarDatos)
    .then(guardarDatos)
    .then((confirmacion) => {
        console.log("Datos guardados: ", confirmacion);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    })
        