let Idade = prompt("Digite sua idade: ");

if (isNaN(Idade)) {
  alert("Valor inválido!");
}
if (Idade < 18) {
  alert("Você é menor de idade");
} else {
  alert("Você é maior de idade");
}
