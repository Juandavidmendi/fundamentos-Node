function hola(nombre, miCallback){
    setTimeout(function () {
        console.log("Hola, "+nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("bla bla bla");
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    
    if (veces > 0){
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    }else{
        adios(nombre, callback);
    }

}
// --
//recursividad llamar una funcion dentro de la misma funcion

console.log("Iniciando proceso...");

hola('Carlos', function (nombre){
    conversacion(nombre, 3, function(){
        console.log("proceso terminado");
    });
})
//situaciones complejas
// hola('Juan', function(nombre){
//     adios(nombre ,function(){
//         console.log('Terminamos');
//     });
// });

//     hablar(function (){ 
//         hablar(function (){ 
//             hablar(function (){ 
//                 adios(nombre, function(){
//                     console.log("Terminando proceso...");
//                 });
//             });
//         });
//     });
// });
