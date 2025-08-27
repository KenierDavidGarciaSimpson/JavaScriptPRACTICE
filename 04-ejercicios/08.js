/**
 * Crear un algoritmo que tume un array de
 * objetos y devuelva un array de pares
 */

let array = [{
    id :1,
    name: "Nicolas Maduro"
},{
    id: 2,
    name: "Juan Guaido"
},{
    id: 3,
    name: "Hugo Chavez"
}];

let pares = [
    [1, {id :1, name: "Nicolas Maduro"}],
    [2, {id: 2, name: "Juan Guaido"}],  
    [3, {id: 3, name: "Hugo Chavez"}],
];

//Primera forma de hacerlo

// function arrayToPairs (arr) {
//     let pairs = [];
//     for (idx in arr) {
//         pairs[idx] = [elemento.id, elemento];
//     }
// }

function arrayToPairs (arr) {
    let pairs = [];
    for (let elemento of arr) {
        pairs.push([elemento.id, elemento]);
    }
    return pairs;
}

console.log(arrayToPairs(array)); // Para ver el resultado en consola