const botones = document.querySelector('#buttons');
const pantalla = document.querySelector('#image');
const titulo = document.querySelector('#title');
const parrafo = document.querySelector('#paragraph');

botones.addEventListener('click', (e) => {
    e.target.innerHTML

    flores.forEach(element => {
        if (element.idFlor == e.target.innerHTML) {
            pantalla.src = element.imagen;
            titulo.textContent = element.titulo;
            parrafo.textContent = element.descripcion;
        }
    });
});