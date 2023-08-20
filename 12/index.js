// Fila do banco
//Exemplo 1
//const filaDeDentro = ["Jose", "Maria", "Joao"];
// const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

//Exemplo 2:
const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];


while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    let pessoa = filaDeFora.shift();
    filaDeDentro.push(pessoa);
}

console.log (filaDeDentro);
console.log (filaDeFora);