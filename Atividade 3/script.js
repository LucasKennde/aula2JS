var value = prompt("Digite o valor do produto");
var idade = prompt("Digite a sua idade")
let desconto =  value - value * 0.1;

idade<18?console.log("Olha que legal, você tem 10% de desconto! Total: "+desconto):console.log("O valor da sua compra é " + value)