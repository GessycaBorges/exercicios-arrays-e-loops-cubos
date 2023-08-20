// Imprima os menores
// Exemplo 1
//const arrayA = [5, 32, 3, 44, 1];
//const arrayB = [57, 4, 21, 2, 13];

//Exemplo 2
const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

let minimo;

for (let i = 0; i < arrayA.length; i ++){
    minimo = Math.min(arrayA[i], arrayB[i]);
    console.log (minimo);
}