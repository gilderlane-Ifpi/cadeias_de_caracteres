const prompt = require('prompt-sync')();

function main() {

// Entrada

    const frase = prompt('Digite uma frase: ');

// Processamento

        function inverter(string) {
            let saida = "";
            for(let contador = string.length - 1; contador >= 0; contador--) {
                saida += string[contador];
            };
            console.log(saida);
        };

// Saída

let novaFrase = frase.replace(/[bcdfghjklmnpqrstvxwyz]/ig, '#');

inverter(novaFrase)

};

main();