//declarar

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

