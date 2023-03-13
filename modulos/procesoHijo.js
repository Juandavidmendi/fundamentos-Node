//estructurar y inicializar modulos 
const { exec, spawn } = require('child_process');// const exec = require('child_process').exec; 



//ejecutar cualquier comando en consola
//ejecutar un proceso debajo de otro, se puede traer un script en python y ejecutarlo 
// exec('dir', (err, stdout, sterr)=>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// }) 

let proceso = spawn('cmd.exe', ['/c','dir']);

console.log(proceso.pid);
console.log(proceso.connected);


proceso.stdout.on('data', function(dato){
    console.log('Esta muerto');
    console.log(proceso.killed);
    console.log(dato.toString())
});
   
//escuchar si el evento salio
proceso.on('exit', function(){
    console.log('el proceso termino');
    console.log(proceso.killed)
});


//detectar cuando un proceso se termina


//node orientado a eventos

// El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

// La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

//     Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
//     Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
//     Usa spawn cuando quieras recibir datos desde que el proceso arranca.
//     Usa exec cuando solo quieras recibir datos al final de la ejecución.

// Un buen blog para revisar mas del tema: