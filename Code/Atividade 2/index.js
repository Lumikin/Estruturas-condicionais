let Idade = prompt("Digite sua idade: "); // Variavel para armazenar a idade que o usuario digitou

if (isNaN(Idade)) { // Verifica se o valor digitado é um número
  alert("Valor inválido!");
}

if (Idade < 18) { // Indentifica se o usuario é menor que 18
  alert("Você é menor de idade");
} else { // Caso o numero seja maior ou igual a 18 o usuario é maior de idade
  alert("Você é maior de idade");
}
