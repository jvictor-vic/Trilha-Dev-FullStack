

const { useInsertionEffect } = require('react')
const prompt = require('prompt-sync')()

//Seção 1: Estruturas de Controle Avançadas

//Validação de Datas
function Questão1() {
    const dataString = prompt('Insira uma data no formato Dia / Mes / Ano ')
    
    //Variaveis para rodar função ehDataValida
    let Dia = Number()
    let Mes = Number()
    let Ano = Number()
    
    //variaveis para rodar função para separar data
    let dataCount = 0
    let dataPonteiro = dataString.length

    //separando dia, mes e ano
    for (let i = dataString.length - 1; i > -1; i--) {
        if (dataString[i] === '/' || i === 0) {
            dataCount++
            dataCount === 1 ?dia = (dataString.slice(i + 1, dataPonteiro).trim):NaN
            dataCount === 2 ?mes = (dataString.slice(i + 1, dataPonteiro).trim):NaN
            dataCount === 3 ?ano = (dataString.slice(i + 1, dataPonteiro).trim):NaN
            dataPonteiro = i
        }
    }
    
    console.log(ehDataValida(Dia, Mes, Ano))

    function ehDataValida(dia, mes, ano) {
        //se o mes for fevereiro e o ano for bissexto
        if (mes === 2 && (ano % 4 === 0 || (ano % 100 === 0 && ano % 400 === 0))) {
            return (29 >= dia) && (dia >= 1)    //retornar True se a data for válida e retornar False se a data não for válida
        } //se o mes for fevereiro, excluindo a possibilidade de ser bissexto 
        else if (mes === 2) {
            return (28 >= dia) && (dia >= 1)
        } //separando meses de 31 dias
        else if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
            return (31 >= dia) && (dia >= 1)    //retornar True se a data for válida e retornar False se a data não for válida            
        } //separando meses de 30 dias
        else if ([4, 6, 9, 11].includes(mes)) {
            return (30 >= dia) && (dia >= 1)    //retornar True se a data for válida e retornar False se a data não for válida            
        } //se o mes for inválido 
        else {
            return false    //retornar false se o mes for inválido
        }
    }
}

//Jogo da Adivinhação
function questão2() {
    //Definindo um número aleatório entre 1 e 100
    const Resposta = Math.floor(Math.random() * 100) + 1
    //Valor inicial de chute
    let Chute = Number(prompt('Adivinhe o número de 1 a 100 '))

    //Loop while para repetir até o numero certo ser respondido
    while(Chute !== Resposta) {
        if(Chute > Resposta) {
            Chute = Number(prompt('Mais baixo! Tente novamente!! '))
        } else if(Chute < Resposta) {
            Chute = Number(prompt('Mais alto! Tente novamente!! '))
        } else {
            Chute = Number(prompt('Número inválido! Tente novamente!! '))
        }
    }
    //Caso o usuario acerte o numero antes de surtar
    console.log("Parabens!! Você acertou!!! O número era " + Resposta)
}

//Palavras Únicas
function questão3() {
    const Texto = String(prompt('Qual texto/string deseja extrair? '))
    let TextoArray = []
    let startIndex = 0

    for (let i in Texto) {
        //condição para extrair a ultima palavra
        if (i == (Texto.length - 1)) {
            TextoArray.push(Texto.slice(startIndex, i + 1).trim())
        } 
        //condição para extrair as palavras que não são as ultimas
        else if(Texto[i] === ' ' ) {
            TextoArray.push(Texto.slice(startIndex, i).trim())
            startIndex = i
        } 
    }
    console.table(TextoArray)
}

//Seção2 2: Funções e Recursão

//Fatorial Recurssivo
function Questão4() {
    const n = Number(prompt('Insira o número a calcular o fatorial: '))
    console.log(FatorialRecursivo(n))

    if(n < 0 || n === NaN || n === null) {
        console.log('Erro! Número inválido')
    } else {
        console.log('Resultado: ' + FatorialRecursivo(n))
    }

    function FatorialRecursivo(f) {
        if (f === 1 || f === 0) {
            return 1
        } else {
            return f * FatorialRecursivo(f - 1)
        }
    }
}

//5. Debounce
function Debounce(fn, delay) {
    let timeout

    return function(...args) {
        timeout = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

//Memoization
function memoize(fn) {
    const cache = new Map() //criando Map para cachear elementos

    return function(...args) {
        const key = JSON.stringify(args)    //cria um chave única com os argumentos
        
        if(cache.has(key)){
            return cache.get(key)   //busca resultado no cache
        } else {
            const result = fn.apply(this, args) //executa função inicial
            cache.set(key, result)  //guarda resultado no cache
            return result
        }
    }
}


//Seção 3: Arrays e Objetos Complexos

//Mapeamento e Ordenação
function Questão7() {

}

//Agrupamento por Propriedade
function Questão8() {

}

//Coversão entre Formatos
function Questão9() {

}