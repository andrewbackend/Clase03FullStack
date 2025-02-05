//Seleccionar el formulario

const formulario = document.getElementById('miFormulario');

//Añade un evento submit al formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío real del formulario
    alert('Formulario enviado correctamente!!');
});