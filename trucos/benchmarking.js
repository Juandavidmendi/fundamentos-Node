console.time('todo');

let suma = 0;
console.time('blucle1');
for (let i =0; i<100000000; i++ ){
    suma += 1;
}
console.timeEnd('blucle1');


let suma2 = 0;

console.time('blucle2');
for (let j =0; j<100000000; j++ ){
    suma2 += 1;
}
console.timeEnd('blucle2');

//ejecucion de la funcion con dos console de inicio y fin
console.time('asincrono');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() =>{
        console.timeEnd('asincrono');
    });

//finalizar todo el proceso sincrono
console.timeEnd('todo');

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('termina el procesos asincrono');
            resolve();
        }, 1000);
    })    
}
