var peso = prompt("Digite o seu peso")
var altura = prompt("Digite a sua altura")
var imc = peso/(altura*altura);

if(imc < 18.5){
    console.log(`Seu imc é ${imc} MAGREZA | Obesidade Grau 0`);
}else if(imc >= 18.5 && imc <24.9){
    console.log(`Seu imc é ${imc} NORMAL | Obesidade Grau 0`);
}else if(imc>=25 && imc <29.9){
    console.log(`Seu imc é ${imc} SOBREPESO | Obesidade Grau 0`);
}else if(imc>=30 && imc <39.9){
    console.log(`Seu imc é ${imc} OBESIDADE | Obesidade Grau 1`);
}else{
    console.log(`Seu imc é ${imc} OBESIDADE GRAVE | Obesidade Grau 2`);
}