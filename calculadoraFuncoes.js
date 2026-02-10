// Fiz uma calculadora.
// Pegando os valores e a operação digitada pelo usuário, via teclado.
// Mostrando para o usuário o resultado.
// 09/02/2016. Pablo Leite de Lima.

const readline = require('readline')
const teclado = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
})

teclado.question('Informe seu nome: ', (nome) => {


teclado.question('Digite o primeiro valor: ', (valor1) =>{
    teclado.question('Qual operação quer fazer (+, -, *, /): ', (op) => {    
        teclado.question('Digite o segundo valor: ', (valor2) => {
        
        // Funções para executar as operações (arrow function)
        const soma = (v1, v2) => v1 + v2
        const subtracao = (v1, v2) => v1 - v2
        const multiplicacao = (v1, v2) => v1 * v2
        const divisao = (v1, v2) => v1 / v2
        
        // Se liga que a interface retorna tudo em string então vamos transformar em inteiro.
        const v1 = parseInt(valor1)
        const v2 = parseInt(valor2)

        console.log('\n',nome,',Voçe escolheu a operação: (',op,')')    
        // Aqui vamos tratar a operação escolhida pelo usuário.
        if(op == '+'){
            console.log(v1, ' + ', v2, ' = ', v1 + v2)    
        }else if(op == '-'){
            console.log(v1, ' - ', v2, ' = ', v1 - v2)
        }else if(op == '*'){
            console.log(v1, ' * ', v2, ' = ', v1 * v2)
        }else if(op == '/'){
            console.log(v1, ' / ', v2, ' = ', v1 / v2)
        }else{// Tratando quando usuário escolhe a operação diferente/inválida.
            console.log('Escolha uma operação válida.')
            console.log('Operações válidas para escolha (+, -, *, /)')
        }
        teclado.close()// Fechando a interface
        })    
    })
})
})