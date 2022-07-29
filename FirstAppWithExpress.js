/*
const http = require('http');

const hostname = '127.0.0.1';
// geralmente em ambiente de produçao usamos a NDex
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(port, hostname, () => {
    console.log("Servidor rodando");
})
*/
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/arquivos/texto1.md'));
})

router.get('/texto2', function (req, res) {
    res.sendFile(path.join(__dirname+'/arquivos/texto2.md'));
})

app.use('/', router);

app.listen(process.env.port || 3000);
console.log('servidor rodando');