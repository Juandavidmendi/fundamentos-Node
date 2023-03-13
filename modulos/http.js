const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log("nueva peticion");
    console.log(req.url);

    switch(req.url){
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres')
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain'});

    // res.write('hola ya se usar http en node js');

    // res.end();
}

function hola(){
    return 'Hola Que tal!'; 
}









console.log("Escuchando http en el puerto 3000");




//crear servidor y el servidor escucha atraves desde los puertos

// http.createServer(
//     function (req, res){
//         console.log("nueva peticion");
//         console.log(req.url);

//         //escribir cabecera
//         res.writeHead(201, { 'Content-Type': 'text/plain'});

//         //escribir respuesta al usuario
//         res.write('hola ya se usar http en node js');

//         res.end()//finaliza la peticion
//     }
// ).listen(3000); //inicializa en este servidor





