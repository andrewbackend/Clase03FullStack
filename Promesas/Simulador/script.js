//Simula la carga inicial de datos desde un servidor
const obtenerDatosDelServidor = () => {
    return new Promise((resolve, reject) => {
        sertTimeout(() => {
            const exito = true;
            if(exito){
                resolve([
                    {id: 1, nombre: "Tarea 1" },
                    {id: 2, nombre: "Tarea 2" },
                    {id: 3, nombre: "Tarea 3" },
                ]);
            } else {
                reject("Error al cargar los datos ...");
            }
        }, 2000);
    });
};


let tareas = [];

// Cargar tareas desde el servidor y mostrarlas en la lista
const cargarDatos = async () => {
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = "<li>Cargar tareas ...</li>";

    try {
        const datos = await obtenerDatosDelServidor();
        tareas = datos; 
        guardarEnLocalStorage();
        mostrarTareas();
    }catch (error) {
        lista.innerHTML = `<li style="color: red;">${error}</li>`;
    }
};

//Mostrar las tareas en el DOM
const mostrarTareas = (filtradas = null) => {
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = "";

    const tareasAMostrar = filtradas || tareas;

    tareasAMostrar.forEach((tarea) => {
        const li = document.getElementById("li");
        li.textContent = tarea.nombre;

    });
};

//Agregar una nueva tarea 
const agregarTarea = (evento) => {
    evento.PreventDefault();
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const nuevaTarea = {
        id: Date.now(),
        nomre: nuevaTareaInput.value,
    };
    tareas.push(nuevaTarea);
    guardarEnLocalStorage();
    mostrarTareas();
    nuevaTareaInput.value = "";

}

//Eliminar tarea por ID

//Editar tarea por ID

//Buscar tareas por nombre

//Cargar tareas desde localstorage


