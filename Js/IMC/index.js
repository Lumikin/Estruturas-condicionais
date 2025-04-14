let peso = prompt("Digite seu peso em kg: "); // Variavel para armazenar o peso que o usuario digitou
let altura = prompt("Digite sua altura em metros: "); // Variavel para armazenar a altura que o usuario digitou
let imc = peso / (altura * altura); // Variavel para armazenar o valor do IMC

if (isNaN(peso, altura)) { // Verifica se o valor digitado é um número
    alert("Valor inválido!");
}
if   (imc >= 18.5 && imc <= 24.9) {
    alert('imc Peso ideal')
}
else if  (imc < 18.5) {
    alert("Abaixo do peso ideal");
}
