// ### Problema 7:

// Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad id

const root2 = {
    id: '123',
    child: [{
      id: '234',
      child: [{
        test: {
          id: 2
        }
      }]
    }],
    child2: [{
      id: '345',
      child3: {
        id: '534'
      }
    }]
  };

  
function encontrarID(root, sum, raiz, propiedad, usarPadre){
    if(root.hasOwnProperty("id")){
        delete root.id;

        if(Object.keys(root).length <= 0){
            return encontrarID(raiz, sum+1, {}, propiedad, true);
        }else{
            let nombre = Object.keys(root)[0];

            if(usarPadre){
                propiedad =  nombre;
            }

            if(Array.isArray(root[nombre])){
                return encontrarID(root[nombre][0], sum + 1, raiz, propiedad, false);
            }else if (typeof root[nombre] === 'object'){
                return encontrarID(root[nombre], sum + 1, raiz, propiedad, false);
            }
        }

    }
    else if(usarPadre){
        delete root[propiedad];
        if(Object.keys(root).length <= 0){
            return sum;
        }else{
            let nombre = Object.keys(root)[0];
            if(Array.isArray(root[nombre])){
                return encontrarID(root[nombre][0], sum, raiz, "", false);
            }else if (typeof root[nombre] === 'object'){
                return encontrarID(root[nombre], sum, raiz, "", false);
            }
        }
    }else{
        if(Object.keys(root).length <= 0){
            return encontrarID(raiz, sum, {}, propiedad, true);
        }else{
            let nombre = Object.keys(root)[0];

            if(usarPadre){
                propiedad =  nombre;
            }

            if(Array.isArray(root[nombre])){
                return encontrarID(root[nombre][0], sum, raiz, propiedad, false);
            }else if (typeof root[nombre] === 'object'){
                return encontrarID(root[nombre], sum, raiz, propiedad, false);
            }
        }
    }
}


console.log(encontrarID(root2, 0, root2, "", true));