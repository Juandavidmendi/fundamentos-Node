// variables de entorno para consumir

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('hola'+ nombre);
console.log('tu direccion de correo es'+ web);