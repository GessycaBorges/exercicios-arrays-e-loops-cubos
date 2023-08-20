//Filtrando nomes com a letra A
const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesA = [];

for (let nome of nomes){
    for (let letra of nome) {
        if (nome[0] === "A" || nome[0] === "a"){
            nomesA.push(nome);
            break;
        }
    }
}

console.log (nomesA);