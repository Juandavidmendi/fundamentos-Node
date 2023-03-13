//declarar
//las promesas son una clase global

function hola(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("Hola, "+nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("bla bla bla");
            // resolve(nombre);
            reject("Hay un error");
        }, 1000);
    });

}

function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}


// --
//INICIALIZAR
console.log('Iniciando el proceso');

hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso'); 
    })
    .catch(error =>{
        console.error('Ha habido un error:');
        console.error(error);
    })





// diferencias entre callbacks y promesas podemos ir anidando las promesas 

/*F Las funciones ejecutar cosas cuando sonson,
 V devuelvan la promesa, y quien las llame pueda tener acceso a su estado y demas cosas no dejan de ser asincrona*/

