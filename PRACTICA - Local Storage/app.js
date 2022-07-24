const formTarea = document.querySelector('#form-tareas');
const boxCheckbox = document.querySelector('#box-checkbox');
const tareas = document.querySelector('#tareas');
const nuevaTarea =  document.querySelector('#nuevaTarea');
const numeroTareas = document.querySelector('#numero-tareas');
const iconoModo = document.querySelector('#modo');
const body = document.querySelector('body');
let modoOscuro =  false;

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.length > 0){
        cargarTareas();
    }
});

function cargarTareas(){
    for (let i = 0; i < localStorage.length; i++) {
        const tarea = localStorage.key(i);

        const checktarea =  document.createElement('div');
        checktarea.classList.add('input-group');
        checktarea.setAttribute("id", "id-"+tarea);
        checktarea.innerHTML = 
        `   
            <div class="input-group-text" >
            <input class="form-check-input mt-0" type="checkbox" value="" id="check2" ${localStorage.getItem(tarea) == "checked" ? "checked" : "uncheked"}
                aria-label="Checkbox for following text input" onclick="ValidarTarea(this.checked, '${"text-"+tarea}');" 
                onmouseover="mostrarDelete('${"button-"+tarea}');" onmouseout="ocultarDelete('${"button-"+tarea}');">
            </div>
            <input type="text" class="form-control" id="${"text-"+tarea}" value= "${tarea}" aria-label="Text input with checkbox" 
                    onmouseover="mostrarDelete('${"button-"+tarea}');" onmouseout="ocultarDelete('${"button-"+tarea}');" disabled>
            <button type="button" id="${"button-"+tarea}" class="btn btn-danger" onclick="eliminarTarea('${tarea}','${"id-"+tarea}');" hidden>X</button>
        `;
        boxCheckbox.appendChild(checktarea);
    }

    numeroTareas.textContent =  localStorage.length + ' items left';
};


formTarea.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nuevaTarea.value){
        localStorage.setItem(nuevaTarea.value, "uncheked");

        const checktarea = document.createElement('div');
        checktarea.classList.add('input-group');
        checktarea.setAttribute("id", "id-"+nuevaTarea.value);
        checktarea.innerHTML =
            `   <div class="input-group-text" >
                <input class="form-check-input mt-0" type="checkbox" value="" id="check2" uncheked
                    aria-label="Checkbox for following text input" onclick="ValidarTarea(this.checked, '${"text-"+nuevaTarea.value}');" 
                    onmouseover="mostrarDelete('${"button-"+nuevaTarea.value}');" onmouseout="ocultarDelete('${"button-"+nuevaTarea.value}');">
                </div>
                <input type="text" class="form-control" id="${"text-"+nuevaTarea.value}" value= "${nuevaTarea.value}" aria-label="Text input with checkbox" 
                        onmouseover="mostrarDelete('${"button-"+nuevaTarea.value}');" onmouseout="ocultarDelete('${"button-"+nuevaTarea.value}');" disabled>
                <button type="button" id="${"button-"+nuevaTarea.value}" class="btn btn-danger" onclick="eliminarTarea('${nuevaTarea.value}','${"id-"+nuevaTarea.value}');" hidden>X</button>
            `;
        boxCheckbox.appendChild(checktarea);
        numeroTareas.textContent =  localStorage.length + ' items left';
        nuevaTarea.value = '';
    } 
});

function ValidarTarea(isChecked, nameInput){
    const textInput = document.getElementById(nameInput);
    if(isChecked){
        textInput.style.textDecoration = "line-through";
    }else{
        textInput.style.textDecoration = "none";
    }
};

function mostrarDelete(button){
    const buttonDelete = document.getElementById(button);
    buttonDelete.removeAttribute("hidden"); 
}

function ocultarDelete(button){
    const buttonDelete = document.getElementById(button);
    buttonDelete.setAttribute("hidden", ''); 
}


function eliminarTarea(tarea, idDiv){
    const div = document.getElementById(idDiv);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    localStorage.removeItem(tarea);
    numeroTareas.textContent =  localStorage.length + ' items left';
}


function ActiveAll() {
    document.querySelectorAll('#box-checkbox input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = false;
    });

    document.querySelectorAll('#box-checkbox input[type=text]').forEach(function(textElement) {
        textElement.style.textDecoration = "none";
    });
}

function DesactiveAll() {
    document.querySelectorAll('#box-checkbox input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = true;
    });

    document.querySelectorAll('#box-checkbox input[type=text]').forEach(function(textElement) {
        textElement.style.textDecoration = "line-through";
    });
}

function LimpiarSeleccionados(){
    document.querySelectorAll('#box-checkbox input[type=checkbox]').forEach(function(checkElement) {
        if (checkElement.checked) {
            const divPadre = checkElement.parentNode.parentNode;
            const keyTarea = divPadre.getElementsByTagName('input')[1].value;
            while (divPadre.firstChild) {
                divPadre.removeChild(divPadre.firstChild);
            }

            localStorage.removeItem(keyTarea);
            numeroTareas.textContent =  localStorage.length + ' items left';
        }
    });
}

function CambiarModo(){
    if(modoOscuro){
        iconoModo.classList.remove('bi-brightness-high');
        iconoModo.classList.add('bi-moon');
        body.style.backgroundColor = '#ffffff';
        body.style.filter = '';
        modoOscuro = false;
    }else{
        iconoModo.classList.remove('bi-moon');
        iconoModo.classList.add('bi-brightness-high');
        body.style.backgroundColor = '#000000';
        body.style.filter = 'invert(200%)';
        modoOscuro = true;
    }
}