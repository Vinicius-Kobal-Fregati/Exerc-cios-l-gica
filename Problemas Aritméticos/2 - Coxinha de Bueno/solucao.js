var list = gets().split(" "); //Aqui vamos separar os valores obtidos
var H = parseInt(list[0]); //Atribuímos o valor de index 0 a quantidade de coxinhas comidas
var P = parseInt(list[1]); //Atribuimos o valor de index 1 a quantidade de pessoas
var media = H/P;
console.log(media.toFixed(2));