function otraFuncion(){
    return seRompe();
}


function seRompe(){
    return 3 + z;
}
//como capturar una funcion asincroina
function seRompeAscincrona(cb){
    setTimeout(function(){
        try{
            return 3 + z; 
        }catch(err){
            console.log('Error en mi funcion asincrona');
            cb(err);
        }
    })
}

try{
    // otraFuncion();
    seRompeAscincrona(function(err){
        console.log(err.message);
    });
}catch(err){
    console.error('Vaya, algo se ha roto');
    console.error(err.message);
    console.log('Pero no pasa nada lo hemos capturado');
}
//
console.log('esto de aqui es el final');


