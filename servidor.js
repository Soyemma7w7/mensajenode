const express = require('express');
const http = require('http'); //hace que podamos usar paginas html

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(' ¡Hola mundo desde node.js!\n');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});