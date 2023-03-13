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

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("bla bla bla");
        callbackHablar();
    }, 1000);
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
console.log('Iniciando el proceso');

hola('Carlos')
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    });





// diferencias entre callbacks y promesas podemos ir anidando las promesas 

/*F Las funciones ejecutar cosas cuando sonson,
 V devuelvan la promesa, y quien las llame pueda tener acceso a su estado y demas cosas no dejan de ser asincrona*/

