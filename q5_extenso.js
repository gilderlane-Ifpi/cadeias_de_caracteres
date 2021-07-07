const prompt = require('prompt-sync')();

function main() {

// Entrada

const data = prompt('Informe uma data com as barras dessa forma:DD/MM/AAAA : ');

// Processamento

function Escrever_data_por_extenso(string) {
    let nova_String = string[0] + string[1];
    if ((string[3] + string[4]) == '01') {
        nova_String += ' de Janeiro de ';
    } else if((string[3] + string[4]) == '02') {
        nova_String += ' de Fevereiro de ';
    } else if((string[3] + string[4]) == '03') {
        nova_String += ' de Março de ';
    } else if((string[3] + string[4]) == '04') {
        nova_String += ' de Abril de ';
    } else if((string[3] + string[4]) == '05') {
        nova_String += ' de Maio de ';
    } else if((string[3] + string[4]) == '06') {
        nova_String += ' de Junho de ';
    } else if((string[3] + string[4]) == '07') {
        nova_String += ' de Julho de ';
    } else if((string[3] + string[4]) == '08') {
        nova_String += ' de Agosto de ';
    } else if((string[3] + string[4]) == '09') {
        nova_String += ' de Setembro de ';
    } else if((string[3] + string[4]) == '10') {
        nova_String += ' de Outubro de ';
    } else if((string[3] + string[4]) == '11') {
        nova_String += ' de Novembro de ';
    } else if((string[3] + string[4]) == '12') {
        nova_String += ' de Dezembro de ';
    }
    nova_String += string[6] + string[7] + string[8] + string[9];
    console.log(nova_String)
}

// Saída

Escrever_data_por_extenso(data);

};

main();