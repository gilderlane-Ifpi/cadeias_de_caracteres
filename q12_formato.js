const prompt = require('prompt-sync')()

function main() {

// entrada

        const nome_completo = prompt('Nome Completo: ')
        
// Processamento

        let nome_separado = nome_completo.split(' ')

// Final

        console.log(`Numero de Palavras:${nome_separado[nome_separado.length - 1]}/${nome_separado[0]}`)
    }
    main()