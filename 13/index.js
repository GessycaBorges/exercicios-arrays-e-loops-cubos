// Verificando disjuntores
//const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [false, true, true, false, false, true, false, false, true, true];

let item = 0;
let statusDisjuntor = false;

while (item < disjuntores.length) {
    statusDisjuntor = disjuntores[item]
    if (statusDisjuntor) {
        console.log (item);
    }
    item ++;
}