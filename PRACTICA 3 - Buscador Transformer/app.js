const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputGenero = document.querySelector('#inputModel');
const inputYear = document.querySelector('#inputMovie');
const boxPeliculas = document.querySelector('#');

//5. Crear un objeto con la seleccion de busqeuda del usuario.
const datosBusqueda = {
    nombre : '',
    genero : '',
    year : '',
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(peliculas);
});


function mostrarHTML(peliculas){
    limpiarHTML();

    peliculas.forEach(element => {
        const {nombre, year, genero, descripcion, imagen} = element;

        const cardPelicula =  document.createElement('div');
        cardPelicula.classList.add('col', 'mb-3');
        cardPelicula.innerHTML = 
        `<div class="card bg-secondary flex-row">
            <div class="w-50">
                <img src="img/rick.jpg" class="img-fluid object-fit" alt="transformers">
                </div>
                <div class="card-body w-50">
                    <h2 class="card-title">Optimus Prime.</h2>
                    <p>${genero}</p>
                    <p>Primera Aparicion: Transformers.</p>
                    <p>Descripcion:</p>
                    <p>Es el noble lider de los Autobots. Su misión consiste en luchar contra los Decepticons y deterlos.</p>
                </div>
        </div>`;

        boxPeliculas.appendChild(cardPelicula);
    });
}


//04. Crear el evento de envio de formulario. Aqui se hace el filtro
formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault(); // quitar actualizacion de pagina

    datosBusqueda.nombre = inputName.value;
    datosBusqueda.genero = inputGenero.value;
    datosBusqueda.year = inputYear.value;

    filtrarPeliculas();

    formBusqueda.reset();
});

function filtrarPeliculas(){
    const resultado = peliculas.filte(filtrarName).filter(filtrarGenero).filter(filtrarYear);

    mostrarHTML(resultado);
};

function filtrarName(pelicula){
    const {nombre} = datosBusqueda

    if(nombre){
        return pelicula.nombre == nombre;
    }
    
    return peliculas;
}

function filtrarGenero(pelicula){
    const {genero} = datosBusqueda

    if(genero){
        return pelicula.genero == genero;
    }
    
    return peliculas;
}

function filtrarYear(){
    const {year} = datosBusqueda

    if(year){
        return pelicula.year == year;
    }
    
    return peliculas;
}

//09 Generar una funcion limpiar. Luego agregar a mostrar HTML()
function limpiarHTML(){
    while(boxPeliculas.firstChild){
        boxPeliculas.firstChild.remove();
    }
}