// const p = require('process');

process.on('beforeExit', () =>{
    console.log('el proceso va a terminar');
});
/*aqui se mata el proceso y lo asincorno no funciona */
// exit desconecta del eventloop 
process.on('exit', () =>{
    console.log('Ale, el proceso se acabo');
    // setTimeout(() => {
    //     console.log('esto no se va a ver nunca');
    // }, 0);

});
setTimeout(() => {
    console.log('esto si se va a ver');
}, 0);


//capturar errores no controlados o sea que no tengan un trycatch
process.on('uncaughtException', (err, origen) =>{
    console.log('se nos ha olvidado capturar un error');
    // console.error(err.message);
    setTimeout(() => {
        console.log('esto viene de las Excepciones');
    }, 0);
});
// process.on('uncaughtRejection');



// functionQueNoExiste();