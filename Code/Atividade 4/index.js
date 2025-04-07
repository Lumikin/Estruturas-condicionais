let Valor = prompt("Digite o valor da compra: ");
let Desconto = Valor * 0.1;
let ValorFinal = Valor - Desconto;

if (isNaN(Valor)) {
  alert("Valor inválido!");
}

if (Valor > 100 ) {
  alert("Você ganha um desconto de 10%");
  alert("Valor com desconto: " + ValorFinal);
} 
else {
  alert("Você não ganha desconto");
}
