//João Victor de Oliveira Falcão
//Questões separadas por função

//aplicando prompt-sync
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
    //definindo a array produtos
    let produtos = [
        {   nome: 'Tenis',
            preco: 299.99
        },{
            nome: 'Blusa',
            preco: 49.99
        },{
            nome: 'Tablet',
            preco: 1200
        },{
            nome: 'Sandalia',
            preco: 120
        },{
            nome: 'Headset',
            preco: 499
        }
    ]
    
    console.table(ordemCrescente())

    //função para retornar os nomes em ordem crescente
    function ordemCrescente(){
        const produtosCrescente = produtos.sort((a, b) => a.preco - b.preco)    //criando array em ordem crescente
        const nomesCrescente = produtosCrescente.map(({ nome }) => ( [nome] ))   //mapeando array apenas com os nomes já em ordem crescente
        //console.table(produtosCrescente) //poderia retornar o array produtos em ordem crescente tbm
        return nomesCrescente   //retornando o array com os nomes em ordem
    }
}

//Agrupamento por Propriedade
function Questão8() {
    let vendas = [
        {
            cliente: 'Cleiton',
            total: 1000000
        },{
            cliente: 'Eddie',
            total: 666
        },{
            cliente: 'Jacques',
            total: 1510
        },{
            cliente: 'Brittany',
            total: 45
        },{
            cliente: 'Tiffany',
            total: 250
        },{
            cliente: 'Brittany',
            total: 200
        },{
            cliente: 'Cleiton',
            total: 12350
        }
    ]

    const vendasSomadas = vendas.reduce((Acumulador, instancia) => {
        Acumulador[instancia.cliente] = (Acumulador[instancia.cliente] || 0) + instancia.total
        return Acumulador
    }, [])
    console.table(vendasSomadas)
}

//Coversão entre Formatos
function Questão9() {
    //criando o array base
    let arrayPares = []
    arrayPares['Chave1'] = 1
    arrayPares['Chave2'] = 2
    arrayPares['Chave3'] = 3
    arrayPares['Chave4'] = 4

    //log do array base
    console.log(arrayPares)

    //função para retornar objeto equivalente
    function paresParaObjeto(pares) {
        const objeto = new Object()
        for(let i in pares) {
            objeto[i] = pares[i]
        }
        return objeto
    }

    //log do objeto criado com base no array
    let objetoPares = paresParaObjeto(arrayPares)
    console.log(objetoPares)

    //função para retornar array pares equivalente
    function objetoParaPares(obj) {
        const pares = new Array()
        for(let i in obj) {
            pares[i] = obj[i]
        }
        return pares
    }

    //log do array pares criado com base no objeto
    console.log(objetoParaPares(objetoPares))
}
