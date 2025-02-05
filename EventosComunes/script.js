//Evento 'mouserver' en el botón
document.getElementById('hoverButton').addEventListener('mouseover', () => {
    console.log('Mouse sobre el botón');
});

//Evento 'keydown' en el campo texo

document.getElementById('teclaInput').addEventListener('keydown', (e) => {
    console.log(`Tecla presionada: ${e.key}`);
});