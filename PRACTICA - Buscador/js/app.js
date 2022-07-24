const busqueda = document.querySelector('#form-busqueda');
const boxSerie = document.querySelector('#box-serie');
const inputname =  document.querySelector('#name');
const genere =  document.querySelector('#genere');
const year =  document.querySelector('#year');

const datosBusqueda = {
    nombre : '',
    genero : '',
    year : '',
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(series);
});


function mostrarHTML(series){
    limpiarSeries();

    series.forEach(x => {
        const {name, year, genere, seasons, imagen} = x;
        
        const cardSerie =  document.createElement('div');
        cardSerie.classList.add('card', 'mt-3');
        cardSerie.style.width =  '18rem';
        cardSerie.innerHTML = 
        `
            <img src="${imagen}" class="card-img-top imagen" alt="Caratula serie">
            <div class="card-body justify-content-center">
            <h5 class="card-title">${name}</h5>
            <p class="card-text"><b>Año: </b>${year}</p>
            <p class="card-text"><b>Genero: </b>${genere}</p>
            <p class="card-text"><b>Temporadas: </b>${seasons}</p>
            </div>
        `;

        boxSerie.appendChild(cardSerie);
    });
};


busqueda.addEventListener('submit', (e) => {
    e.preventDefault(); 

    datosBusqueda.nombre = inputname.value;
    datosBusqueda.genero = genere.value;
    datosBusqueda.year = year.value;

    filtrarSeries();
    busqueda.reset();
});

function filtrarSeries(){
    const resultado = series.filter(filtrarName).filter(filtrarGenero).filter(filtrarYear);

    if (resultado.length >= 1) {
        mostrarHTML(resultado);
    }else{
        sinResultados();
    }  
};

function filtrarName(serie){
    const {nombre} = datosBusqueda;

    if(nombre){
        return serie.name == nombre;
    }
    
    return series;
};

function filtrarGenero(serie){
    const {genero} = datosBusqueda
    if(genero){    
        return serie.genere == genero;
    }
    
    return series;
};

function filtrarYear(serie){
    const {year} = datosBusqueda

    if(year){
        return serie.year == year;
    }
    
    return series;
};

function limpiarSeries(){
    while(boxSerie.firstChild){
        boxSerie.firstChild.remove();
    }
};

function sinResultados(){
    limpiarSeries();
    const alertSearch = document.createElement('div');
    alertSearch.classList.add('alert', 'alert-danger', 'fs-2', 'w-100', 'mt-5', 'd-flex', 'justify-content-center');
    alertSearch.textContent = 'No se encontro ningun resultado para la busqueda';

    boxSerie.appendChild(alertSearch);
};