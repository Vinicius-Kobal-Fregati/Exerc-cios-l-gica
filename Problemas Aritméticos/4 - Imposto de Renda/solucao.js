var salario = parseFloat(gets()); 
var isento = false;
/* Este problema é simples, cada faixa salarial seguinte terá um acréscimo do máximo de imposto das faixas anteriores.
Ou seja, quem recebe 3500 reais vai pagar 8% de 1.000 (que sempre dará 80) mais 18% da diferença do salário dele e do
mínimo da faixa ([3500 - 3000 = 500] => 500*0,18 )
Criei um booleano para verificar se a pessoa será ou não isenta dos impostos.
*/
if (salario <= 2000) {
  isento = true;
} else if (salario <= 3000) {
  var imposto = (salario - 2000)*0.08;
} else if(salario <=4500) {
  var imposto = (salario - 3000)*0.18 + 80;
} else if(salario > 4500) {
  var imposto = (salario - 4500)*0.28 + 350;
}

if (isento) {
  console.log('Isento');
} else {
  console.log("R$ " + imposto.toFixed(2));
}