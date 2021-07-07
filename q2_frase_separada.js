// Leia uma frase e mostre cada palavra da frase em uma linha separada

const prompt = require('prompt-sync')();

function main() {

// Entrada

    const frase = prompt('Digite uma frase: ');

// Processamento

        function quebradorDeLinha(string) {
            let novaString = '';
            for(let i = 0; i < string.length; i++) {
                novaString = novaString + string[i];
                if(string[i] === ' ') {
                    console.log(novaString);
                    novaString = '';
                }
            }
            console.log(novaString)
        }

// Saída

quebradorDeLinha(frase)

};

main();