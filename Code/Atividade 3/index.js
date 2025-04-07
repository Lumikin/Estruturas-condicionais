let Numero = prompt("Digite o seu Numero: ");

if (isNaN(Numero)) {
  alert("Valor inválido!");
}
if (Numero % 2 == 0) {
  alert("O numero é par");
} else {
  alert("O numero é impar");
}
