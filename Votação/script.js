var idade = prompt("Digite a sua idade");


if(idade>= 16 && idade <18 || idade >=65){
    console.log("Você pode votar, mas não é obrigatorio ");
}else if(idade>=18 && idade <65){
    console.log("Você pode votar. É obrigatorio!")
}else{
    console.log("Você não pode votar")
}

// const cpfInput = document.getElementById("cpf");

// cpfInput.addEventListener("input", (e) => {
//   let value = e.target.value.replace(/\D+/g, "");
//   let formattedValue = "";
  
//   for (let i = 0; i < value.length; i++) {
//     if (i === 3 || i === 6) {
//       formattedValue += ".";
//     } else if (i === 9) {
//       formattedValue += "-";
//     }
//     formattedValue += value[i];
//   }

//   e.target.value = formattedValue.substring(0, 14);
//         return;
//     });


