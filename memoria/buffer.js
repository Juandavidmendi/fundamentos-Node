// let buffer = Buffer.alloc(4); //conjunto de datos binarios
// let buffer = Buffer.from([1, 2, 5]); 
// espacios  en memoria trabajar con datos crudos 
let buffer = Buffer.from('hola');

// console.log(buffer);

// --

let abc = Buffer.alloc(26);
console.log(abc);

// bucle

for (let i = 0; i<26; i++){
    abc[i] = i + 97; 
}

console.log(abc.toString());

// escritor en memoria podemos crear un buffer e ir cambiando los datos, podemos ir cambiando cada una de las letras 