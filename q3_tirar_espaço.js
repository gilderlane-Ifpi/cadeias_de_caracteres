// Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

const prompt = require('prompt-sync')();

function main() {

// Entrada

    const frase = prompt('Digite uma frase: ');

// Processamento

        function juntado_Palavras(string) {
            let nova_String = '';
            nova_String = string.replace(/\s/g, '');
            console.log(nova_String);
        }

// Saída

juntado_Palavras(frase);

};

main();