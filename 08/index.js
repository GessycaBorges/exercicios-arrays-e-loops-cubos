// Encontrando o maior
//const numeros = [3, 24, 1, 8, 11, 7, 15];
const numeros = [3, 4, 1, 8, 11, 7, 5];

let numeroMaior = numeros [0];

for (let numero of numeros) {
    if (numero >= numeroMaior){
        numeroMaior = numero;
    }
}

console.log (numeroMaior);