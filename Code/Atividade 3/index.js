let Numero = prompt("Digite o seu Numero: "); // Variavel para armazenar o numero que o usuario digitou

if (isNaN(Numero)) { // Verifica se o valor digitado é um número
  alert("Valor inválido!");
}
if (Numero % 2 == 0) { // Verifica se o numero é par fazendo a divisão por 2 e verificando se o resto é igual a 0
  alert("O numero é par");
} else {  // Se o resto da divisão for diferente de 0 o numero é impar
  alert("O numero é impar");
}
