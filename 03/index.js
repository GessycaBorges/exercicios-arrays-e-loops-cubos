// Encontre o 10
//;const numeros = [54, 22, 14, 87, 10, 284];
const numeros = [54, 22, 14, 10, 284];
//const numeros = [54, 22, 14, 87, 284];

let encontrado = false;

for (let numero of numeros){
    if (numero === 10){
        console.log (numeros.indexOf(numero));
        encontrado = true;
        break;
    }
}

if (!encontrado){
    console.log ("-1");
}