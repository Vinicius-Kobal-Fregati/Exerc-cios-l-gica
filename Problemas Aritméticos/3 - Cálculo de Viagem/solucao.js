var list = gets().split(" "); //Aqui vamos separar os valores obtidos
var tempoGasto = parseInt(list[0]); //Atribuímos o valor (como inteiro) de index 0 a quantidade de coxinhas comidas
var velocidadeMedia = parseInt(list[1]); //Atribuimos o valor (como inteiro) de index 1 a quantidade de pessoas
const mediaDeConsumo = 12; //Esse valor não se altera, por isso é uma constante
/*Para realizar essa conta, basta multiplicar a velocidade média pelo tempo gasto e dividir pela média de mediaDeConsumo
Matematicamente, vendo as unidades: 
[km/h]*[h] = [km]
E [km]/[km/L] = [L]
*/
var litrosNecessarios = (tempoGasto*velocidadeMedia)/mediaDeConsumo;
console.log(litrosNecessarios.toFixed(3));