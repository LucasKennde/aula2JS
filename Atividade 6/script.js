var numero = prompt("Digite um número para saber se é primo");

if(numero > 1 && numero%2==0){
    if(numero == 2){
        console.log("Este numero é Primo")
    }else{
        console.log("Este numero não é Primo")
    }
}else{

    if(numero == 3 || numero == 5 || numero %3 != 0 && numero%5!=0 && numero != 1){
        console.log("Este numero é primo")
    }else {
        console.log("Este número não é primo")
    }
}

