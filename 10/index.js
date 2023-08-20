// Para pensar um pouco mais
const numeros = [8, 11, 4, 1];

let maiorDiferenca = 0;

for (let numero of numeros){
    for (let numero2 of numeros){
        let diferenca = numero - numero2;
        if (maiorDiferenca <= diferenca) {
            maiorDiferenca = diferenca;
        }
    }
}

console.log (maiorDiferenca);