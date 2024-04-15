// SOLICITA O NOME, ALTURA EM CENTÍMETRO E PESO
let nome = prompt("Digite seu nome:");
let alturaCentimetros = parseFloat(prompt("Digite sua altura em centímetros:"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

// CONVERTE ALTURA DE CENTÍMETROS PARA METROS
let alturaMetros = alturaCentimetros / 100;

// CALCULA O IMC
let imc = peso / (alturaMetros * alturaMetros);

// ARREDONDA EM DUAS CASA DECIMAIS
imc = imc.toFixed(2);

// CLASSIFICA COM BASE NO IMC
let classificacao;
if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

// MOSTRA NO CONSOLE O NOME, O IMC E A CLASSIFICAÇÃO
console.log("Nome: " + nome);
console.log("IMC: " + imc);
console.log("Classificação: " + classificacao);
