const http = require('http');  //Esta es la manera de JS de importar cosas. 
const fs = require('fs'); 

/*function rqListener(req, res) {} -> 1ª forma de crear un servidor
http.createServer(rqListener);
*/

/* http.createServer(function(req, res)) {} -> 2ª forma de hacerlo. Funciones anónimas. */

const server = http.createServer((req, res) => {                  //-> 3ª forma de hacerlo. Arrow functions. 
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();                         //Súper importante cerrar la response. Nada de lo que se escriba después del cierre va a aplicarse.    
    }  

    if (url === '/message' && method === 'POST') {
        const req_body = [];           //Vamos a trabajar con la información del body que hay en la request. 
        req.on('data', (chunk) => {   //Esta línea hace que el servidor escuche los eventos tipo data por fragmentos (chunk).
        console.log(chunk);
        req_body.push(chunk);  //Guarda la información obtenida del data en la variable req_body.
    });
        req.on('end', () => {
            const parsedBody = Buffer.concat(req_body).toString(); //Convertimos todos los trozos de info del body en un buffer para poder convertirlo todo a str. 
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]; //Se queda sólo con el segundo elemento de la respuesta: message=Drama -> Drama (Leer sobre la función split)
            fs.writeFileSync('message.txt', message); //Guarda la info en el archivo message.txt
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

 

server.listen(3000);   //Esto hace que el servidor esté abierto a escuchar llamadas entrantes. 
