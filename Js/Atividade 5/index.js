let Valor = prompt("Digite o Multiplo de 5: "); // Variavel para armazenar o valor que o usuario digittou

if (isNaN(Valor)) { // Verifica se o valor digitado é um número
  alert("Valor inválido!");
}

if (Valor % 5 == 0) { // Verifica se o numero é multiplo de 5 Fazendo a divisão por 5 e verificando se o resto é igual a 0
  alert("O numero é multiplo de 5");
} 

else { // Se o resto da divisão for diferente de 0 o numero não é multiplo de 5
  alert("O numero não é multiplo de 5");
}
