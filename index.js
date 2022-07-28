const chalk = require('chalk'); // Qnd temos uma biblioteca instalada, precisamos ir na documentação para descobrir como ela funciona, cá está um exemplo. 

console.log(chalk.blue('Hello world!'));

console.log(chalk.red("Aprendendo a usar NODE!"));

const paragraph = "texto retornardo por função";

function trecho(texto) {
    return texto;
}

console.log(chalk.yellow(trecho(paragraph)));


const fs = require('fs');

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));

//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'NodeJS'));

//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);