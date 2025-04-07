let Valor = prompt("Digite o valor da compra: ");  // Variavel para armazenar o valor que o usuario digitou
let Desconto = Valor * 0.1;  // Variavel para armazenar o desconto de 10% do valor
let ValorFinal = Valor - Desconto;  // Variavel para armazenar o valor final com desconto

if (isNaN(Valor)) { // Verifica se o valor digitado é um número
  alert("Valor inválido!");
}

if (Valor > 100 ) { // Verifica se o valor é maior que 100
  alert("Você ganha um desconto de 10%"); 
  alert("Valor com desconto: " + ValorFinal); // Exibe o valor com desconto
} 
else { // Se o valor for menor ou igual a 100 o usuario não ganha desconto
  alert("Você não ganha desconto");
}
