const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há file'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => trataErro(erro))
}

pegaArquivo('./arquivos/texto1.md');
/*
function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
      .catch(error => console.log(error))
      .finally(() => alert("Fim")
}
   
getUser(1); // "Nome Sobrenome"
exibeDadosUser(await getUser(1))
const endpoints = [
    "https://api.com/api/user/1",
    "https://api.com/api/user/2",
    "https://api.com/api/user/3",
    "https://api.com/api/user/4"
]
   
const promises = endpoints.map(url => fetch(url).then(res => res.json()))
   
Promise.all(promises)
.then(body => console.log(body.name))

async function getUser(userId) {
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json();
    return userData;
}
   
let [user1, user2] = await Promise.all([getUser(1), getUser(2)])

*/
function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      chalk.yellow(resolve("sucesso na promessa"));
    });
}
   
function exibeResposta(textoResult) {
    console.log(textoResult);
}
   
promessa(true)
.then((texto) => exibeResposta(texto))
   // sucesso na promessa