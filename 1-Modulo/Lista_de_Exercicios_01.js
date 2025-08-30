// Lista de Exercicios 01   //  João Victor de Oliveira Falcão
// Exercicios separados em cases para cada número de questão dentro de um loop

const { useInsertionEffect } = require('react')
const prompt = require('prompt-sync')()

let Questao = Number(undefined)

while (!(Questao === 0))    {
    Questao = Number(prompt('Qual questão deseja testar? '))
    switch(Questao)   {
        case 1 :
            let Numero = Number(prompt('Qual número deseja verificar? '))
            console.log(Numero)
            if(Number.isNaN(Numero) === true)    {
                console.log('Número inválido')
            }   else if(Numero % 2 === 0)   {
                console.log('O número é par')
            }   else    {
                console.log('O número é ímpar')            
            }
            break

        case 2  :
            let Idade = Number(prompt('Qual a sua idade (em anos)? '))
            if((Idade >= 0) && (Idade <= 12))  {
                console.log('Sua categoria etária é CRIANÇA')
            } else if((Idade > 12) && (Idade < 18))    {
                console.log('Sua categoria etária é ADOLESCENTE')
            } else if((Idade >= 18) && (Idade < 65))    {
                console.log('Sua categoria etária é ADULTO')
            } else if(Idade >= 65)    {
                console.log('Sua categoria etária é IDOSO')
            } else if(Number.isNaN(Idade))  {
                console.log('Insira um número')
            } else  {
                console.log('Idade inválida')
            }
            break

        case 3  :
            const Med = 6   //Media minimima para aprovação
            const Min_Rec = 3   //Media minima para recuperação
            let nota = Number(prompt('Qual a nota (de 0 a 10)? '))
            if((nota >= Med) && (nota <= 10)) {
                console.log('Aprovado!')
            } else if((nota < Med) && (nota >= Min_Rec))    {
                console.log('Recuperação')
            } else if((nota < Min_Rec) && (nota >= 0))    {
                console.log('Reprovado')
            } else  {
                console.log('Insira uma nota válida')
            }
            break
        
        case 4  :
            let opcao = Number()    

            console.log('Menu interativo da questão 4:')
            console.log('1 - Opção A')
            console.log('2 - Opção B')
            console.log('3 - Opção C')

            switch(opcao = Number(prompt('Qual opção deseja selecionar? ')))    {
                case 1 :
                    console.log('Parabéns!! Você selecionou a opção A')
                    break
                case 2 :
                    console.log('Parabéns!! Você selecionou a opção B')
                    break
                case 3 :
                    console.log('Parabéns!! Você selecionou a opção C')
                    break
                default :
                    console.log('Opção inválida')
            }
            break

        case 5  :
            let peso = Number(prompt('Qual o peso (em quilos)? '))
            let altura = Number(prompt('Qual a altura (em metros)? '))
            let imc = (peso / (altura ** 2))

            console.log('O IMC é ' + imc)

            if(imc < 18.5)  {
                console.log('Baixo peso')
            } else if((imc >= 18.5) && (imc < 25))  {
                console.log('Peso Ideal')
            } else if((imc >= 25) && (imc < 30))  {
                console.log('Sobrepeso')
            } else if((imc >= 30))  {
                console.log('Obesidade')
            } else  {
                console.log('Dados inválidos!')
            }
            break

        case 6  :
            let lado_A = Number(prompt('Qual o comprimento do lado A? '))
            let lado_B = Number(prompt('Qual o comprimento do lado B? '))
            let lado_C = Number(prompt('Qual o comprimento do lado C? '))
            
            if((Number.isNaN(lado_A)) || (Number.isNaN(lado_B)) || (Number.isNaN(lado_C)) ) {
                console.log('Comprimentos inválidos')
            } else if((lado_A < (lado_B + lado_C)) && (lado_B < (lado_A + lado_C)) && (lado_C < (lado_A + lado_B)))    {
                if((lado_A = lado_B) || (lado_A = lado_C) || (lado_B = lado_C) )    {
                    console.log('O triângulo é isóceles')
                } else if((lado_A != lado_B) && (lado_B != lado_C)) {
                    console.log('O triângulo é escaleno')
                } else if((lado_A == lado_B) && (lado_B == lado_C)) {
                    console.log('O triângulo é equilátero')
                } else  {
                    console.log('Erro!')
                }
            } else    {
                console.log('Os três lados não formam um triangulo')
            }
            break

        case 7  :
            let qtd = Number(prompt('Qual a quantidade de maçãs a serem compradas? '))
            let custo = Number()

            if((qtd > 0) && (qtd < 12)) {
                custo = 0.3 * qtd
                console.log('As maçãs vão custar R$' + custo)
            } else if(qtd>= 12) {
                custo = 0.25 * qtd
                console.log('As maçãs vão custar R$' + custo)
            } else  {
                console.log('Quantidade inválida')
            }
            break

        case 8  :
            let Valor1 = prompt('Insira o primeiro valor: ')
            let Valor2 = prompt('Insira o segundo valor: ')

            if(Valor1 > Valor2) {
                console.log(Valor1 + ' > ' + Valor2)
            } else if(Valor1 < Valor2)  {
                console.log(Valor2 + ' > ' + Valor1)
            } else if(Valor1 == Valor2) {
                console.log(Valor1 + ' = ' + Valor2)
            } else  {
                console.log('Erro!')
            }
            break

        case 9  :
            let Count_Max = 10  //Valor maximo da contagem
            let Count_Min = 1   //Valor minimo da contagem
            
            //laço de contagem regressiva
            for(let Count = Count_Max ; Count >= Count_Min ; Count--) {
                console.log(Count)
            }
            break

        case 10 :
            let Num = Number(prompt('Insira o número inteiro: '))

            for(let i = 0 ; i < 10 ; i++)   {
                setTimeout(() => {
                    console.log(Num)
                }, 600);
            }
            break

        case 11 :
            let Resultado = 0   //resultado da soma
            let Fator = 0       //fator a adicionar

            for(let i = 0 ; i < 5 ; i++)    {
                Fator = Number(prompt('Insira o fator para somar: '))
                Resultado = Resultado + Fator
                console.log(Resultado)
            }
            break

        case 12 :
            let tabuada = Number(prompt('Insira o numero para exibir sua tabuada: '))

            for(let i = 1 ; i <= 10 ; i++)    {
                console.log(tabuada + ' * ' + i + ' = ' + (tabuada*i))
            }
            break

        case 13 :
            let Media = 0       //Valor da média
            let Soma_Med = 0    //Soma para calculo da média
            let Cont_Med = 0    //Contagem de valores para calculo da média
            let Fat_Med = Number(prompt('Qual valor deseja adicionar a média: '))

            while(Fat_Med != 0) {
                Cont_Med += 1
                Soma_Med += Fat_Med //a cada loop adiciona o fator fornecido pelo usuario a soma
                Media = Soma_Med / Cont_Med
                console.log('A média parcial é: ' + Media)
                Fat_Med = Number(prompt('Qual valor deseja adicionar a média: '))
            }
            console.log('A média final é: ' + Media)
            break

        case 14 :
            let Fatorial = Number(prompt('Qual o número deseja calcular o fatorial? '))
            let Result_Fatorial = 1

            while(Fatorial >= 1)    {   //o while não foi a melhor escolha para esse calculo ;-;
                Result_Fatorial = Result_Fatorial * Fatorial
                Fatorial--
            }
            console.log('O resultado é ' + Result_Fatorial)
            break

        case 15 :
            let Fator1_Fibonacci = 0    //menor fator da soma
            let Fator2_Fibonacci = 1    //maior fator da soma
            let lenght_Fibonacci = 10   //tamanho da sequencia
            let Resultado_Fibonacci = 1 //resultado mesmo
        
            console.log('Sequencia de Fibonacci')
            for(let i = 0 ; i < lenght_Fibonacci ; i++)  {
                console.log(Resultado_Fibonacci)
                Resultado_Fibonacci = Fator1_Fibonacci + Fator2_Fibonacci
                Fator1_Fibonacci = Fator2_Fibonacci
                Fator2_Fibonacci = Resultado_Fibonacci
            }
            break
        
        default :
        console.log('Questão inválida!')
        break
        
        case 0 :
        console.log('Fin.')
        break

        }
}