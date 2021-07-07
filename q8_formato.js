const prompt = require('prompt-sync')();

function main() {

// Entrada

    let hora = prompt('Informe a hora (hh:mm:ss): ');

// Processamento

function horaAtualizada(string) {
    let novaString = (string[0] + string[1]) + ' hora(s) ' + (string[3] + string[4]) + '  minuto(s) ' + (string[6] + string[7]) + ' segundo(s)';
    console.log(novaString);
}

// Saída

horaAtualizada(hora);

};

main();