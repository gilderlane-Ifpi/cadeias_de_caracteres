// Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.

const prompt = require('prompt-sync')();

function main() {

// Entrada

    const frase = prompt('Digite uma frase: ');

// Processamento

        function duplicador_De_Caractere(string) {
            let nova_String = ''
            for(let i = 0; i < string.length; i++) {
                nova_String = nova_String + string[i] + string[i];
            };
            console.log(nova_String) 
        };

// Saída

duplicador_De_Caractere(frase);

};

main();