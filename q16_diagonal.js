const prompt = require('prompt-sync')()

function main(){

// Entrada

    const nome = prompt('Escreva alguma coisa (no maximo 20 caracteres): ')

    diagonal(nome)
}
main()

// Processamento

function diagonal(nome){
    nome.length
    let i = 0
    let espaco = ''
    while(i <= nome.length - 1){
        espaco = espaco + ' '
        console.log(espaco, nome[i])
        i++
    }
}
// Final