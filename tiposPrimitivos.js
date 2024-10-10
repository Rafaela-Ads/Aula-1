const prompt=require('prompt-sync')();
// PEGAR O NOME E A IDADE E EXIBIR
let nome = prompt ('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade :'));
console.log(`Seu nome é ${nome} e voce tem ${idade} anos`);

// PEGAR A CIDADE E EXIBIR
let cidade = prompt('Digite a cidade onde voce mora: ');
console.log(`${nome} mora na cidade de ${cidade}`);

// OPERAÇOES MATEMATICAS

let n1 = parseInt(prompt('Digite um numero: '));
let n2 = parseInt(prompt('Digite outro numero: '));
const soma = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n1 / n2;
console.log(`Os numeros digitados foram: ${n1} e ${n2}`);
console.log(`A soma dos numeros é: ${soma}`);
console.log(`A subtracao dos numeros é: ${sub}`);
console.log(`A multiplicaçao dos numeros é :${mult}`);
console.log(`A divisao dos numeros é :${div}`);

// CALCULAR A AREA DO TRIANGULO

let base = parseInt(prompt(`Digite o valor da base do triangulo: `));
let altura = parseInt(prompt(`Digite o valor da altura do triangulo: `));
const area = ((base * altura) / 2).toFixed(2);

console.log(`A area do triangulo é: ${area}`);
console.log(`A base do triangulo é: ${base}`);
console.log(`A altura do triangulo é: ${altura}`);

//CALCULAR A MÉDIA DE TRES NOTAS 
let nota1 = parseInt(prompt('Digite a primeira nota:'));
let nota2 = parseInt(prompt('Digite a segunda nota:'));
let nota3 = parseInt(prompt('Digite a terceira nota:'));
const media = ((nota1+nota2+nota3)/3).toFixed(2);
console.log(`A media das três notas é: ${media} `);

//PRODUTO COM DESCONTO

let produto = parseInt(prompt(`Digite o valor do produto: `));
const desconto = 2.5 / 100; //Converte 2.5% para decimal
let valorDesconto = produto * desconto;
let valorFinal = produto -  valorDesconto;
console.log(`O desconto é de R$ ${valorDesconto.toFixed(2)} e o valor final é de R$  ${valorFinal.toFixed(2)}`);

//CALCULAR O IMPOSTO DE RENDA 

const salario1 = 1000;
console.log(`Você está insento de pagar imposto de renda`);

const salario2 = 2500;
const impostoRenda2 = 0.075;
const Deducao1 = 169.44;
const salarioLiquido2 = salario2 * impostoRenda2 - Deducao1;
console.log(`O salario líquido é ${salarioLiquido2}`);

const salario3 = 3500;
const impostoRenda3 = 0.15;
const Deducao3 = 381.44;
const salarioLiquido3 = salario3 * impostoRenda3 - Deducao3;
console.log(`O salario líquido é ${salarioLiquido3}`);

const salario4 = 4000;
const impostoRenda4 = 0.225;
const Deducao4 = 662.77;
const salarioLiquido4 = salario4 * impostoRenda4 - Deducao4;
console.log(`O salario liquido é ${salarioLiquido4}`);

//CONVERSOR DE MOEDAS
let ValorReal = parseInt(prompt(`Digite o valor em reais : `));
const cotacaoDolar = 5.50;
let ValorDolar = ValorReal/cotacaoDolar;
console.log(`O valor em dolar é ${ValorDolar}`);

//CONVERSOR EM REAL
let valorDolar2 = parseInt(prompt(`Digite o valor em dolar: `));
const cotacaoReal = 5.50;
let valorReal2 = valorDolar2 * cotacaoReal;
console.log(`O valor em real é: ${valorReal2}`);

//CONVERSOR DE TEMPERATURA
let celsius = parseInt(prompt(`Digite a temperatura em celsius: `));
const farenheit = ((celsius * 9) / 5) + 32;
console.log(`A temperatura em Farenheit é : ${farenheit}°F`);

//IMC E MOSTRAR O IMC
const peso = 70;
const altura2 = 1.75;
const imc = peso / (altura2 * altura2).toFixed(2);
console.log(`O IMC é ${imc}: `);
