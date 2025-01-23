let data = new Date();

let ano = data.getFullYear();
let mes = data.getMonth();

//Mostra mes escrito
const meses=["Janeiro", "Fevereiro","Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito= meses[data.getMonth()];

//console.log(mesEscrito);

//PEGAR DIA DO MES
let diaMes = data.getDate();

// pegar o dia da semana
let diaSemana = data.getDay();
const diasNome = ["Domingo","Segunda","Terça","Quarta","Quinta","sexta","sabado"];
let diasEscrito = diasNome[data.getDay()];

console.log(diasEscrito);