//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert ('Boas vindas ao nosso site!');

//Defina uma variavel numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50

//Defina uma variavel saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000

/* Declare uma variavel chamada mensagemDeErro e atribua a ela o valor
"Erro! Preencha todos os campos" Agora exiba um alerta com o valor da 
variavel mensagemDeErro. */

let mensagemDeErro = 'Erro! Preencha todos os campos'
alert (mensagemDeErro);

/* Use um prompt para perguntar o nome do usuario e armazena-lo na 
variavel nome. */

let nome = prompt('Qual seu nome?');
while (!isNaN(nome)) {
    nome = prompt ('Insira um nome válido!');
}

/* Peca ao usuario para digitar sua idade usando um prompt e 
armazene-a na variavel idade. */
let idade = (prompt('Qual sua idade?'));
while (isNaN(idade) || idade <= 0) {
    idade= prompt ('Insira uma idade válida!');
}


/*Agora, caso a idade seja maior ou igual que 18, exiba um 
alerta com a mensagem "Pode tirar a habilitação!". */
if (idade >= 18) {
    alert ('Pode tirar a habilitação!');
} else { 
    alert ('Não pode tirar a habilitação :(')
}

//Mostrando os dados no Console

console.log ('Nome: ' + nome);
console.log ('Idade: ' + idade);
console.log ('Número de Vendas: ' + numeroDeVendas);
console.log ('Saldo Disponivel: ' + saldoDisponivel);

