/**
 * Crear algoritmo que devuelva un 
 * array de objetos en base a pares
 */

let pairs = [
    [1, {id: 1, name: "Nicolas Maduro"}],
    [2, {id: 2, name: "Juan Guaido"}],
    [3, {id: 3, name: "Hugo Chavez"}],
];

let array = [{
    id: 1,
    name: "Nicolas Maduro"
}, {
    id: 2,
    name: "Juan Guaido"
}, {
    id: 3,
    name: "Hugo Chavez"
}];

function toCollection(pairs) {
    let collection = [];
    for (let pair of pairs) {
        collection.push(pair[1]);
    }
    return collection;
}

// function toCollection(pairs) {
//     let collection = [];
//     for (idx in arr) {
//         let elemento = arr[idx];
//         collection[idx] = elemento[1];
//         collection[idx].id = elemento[0];
//     }

//     return collection;
// }

//Varias formas de hacerlo, la segunda me daba error asi que la hice
//Con la primera forma, pero lo ideal es usar indx in arr 

let resultado = toCollection(pairs);
console.log(resultado); // Para ver el resultado en consola