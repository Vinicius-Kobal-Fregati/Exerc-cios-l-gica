function mod(x){ //Aqui eu criei uma função para utilizar o módulo em um valor, ou seja, sempre deixá-lo positivo.
  if(x < 0){    // Poderia usar a função abs que já existe na biblioteca math, mas quis tentar criar a minha.
    x+= (-2)*x
  }
  return x
}
var numeros = gets().split(' ');
var a = parseInt(numeros[0]);
var b = parseInt(numeros[1]);
var q = a / b;
var r = a % b ;


if(r < 0){
  r += mod(b); //poderia usar o Math abs também 
  q = (a - r) / b;
}
console.log(q.toFixed(0) + ' ' + r);