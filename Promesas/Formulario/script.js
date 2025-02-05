const form = document.getElementById('registroForm');
const resultadoDiv = document.getElementById('resultado');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        mensaje: document.getElementById('mensaje').value,
    };

    enviarDatosFormulario(datos)
    .then((mensaje) => {
        resultadoDiv.textContent = mensaje;
        resultadoDiv.className = 'message success'; 
    })
    .catch((error) => {
        resultadoDiv.textContent = error;
        resultadoDiv.className = 'message error'; 
    });
});

function enviarDatosFormulario(datos) {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.3; // 70% de éxito
        setTimeout(()=> {
            if(exito) {
                resolve("Datos enviados correctamente");
            } else {
                reject("Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.");
            }
        }, 1500); 
    });
}