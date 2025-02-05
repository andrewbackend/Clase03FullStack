//Seleccionar el contenedor
const contenedor = document.getElementById('contenedor');

//Escucha el evento 'click' en el contenedor
contenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('dinamico')) {
        alert(`Click en: ${e.target.textContent}`);
    }
});