const prompt = require('prompt-sync')();

function main() {

// Entrada

    let palavra = prompt('Informe uma palavra: ');

// Processamento

function palindroma(string) {
    let novaString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }

    if (string == novaString) {
        console.log('É uma palavra palindroma');
    } else {
        console.log('Não é uma palavra palindroma');
    }
}

// Saída

palindroma(palavra)

};

main();