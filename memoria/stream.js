const fs = require('fs');
const stream = require('stream');
const util = require('util');


let data  = '';

// stream de lectura 
let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', function (chunk) {
//     // chunk paquete de datos
//     // console.log(chunk); cuando sea 1 solo paquete
//     data += chunk;
// });

// readableStream.on('end', function (){
//     console.log(data);
// });


// stream de escritura 

//escribiendo en la salida estandar del sistema  stdout es un buffer
// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');
//ver transformacion
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
};



//crear transformacion
let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);