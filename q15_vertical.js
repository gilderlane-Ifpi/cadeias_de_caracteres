const prompt = require('prompt-sync')()

function main(){

// Entrada
    const nome = prompt('Escreva alguma coisa (no maximo 20 caracteres): ')

    vertical(nome)
}

// Processamento
main()

function vertical(Nome){
    Nome.length
    let i = 0
    for (i=0;i <= Nome.length - 1;i++){
        console.log(Nome[i])
    }
} 

// Final
main()