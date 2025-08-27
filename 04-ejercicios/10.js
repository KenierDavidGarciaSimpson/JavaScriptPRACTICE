/**
 * Crear un array de longitud N, y que sus elementos sean
 * numeris de 1 hasta N
 */

let longitud = 7;

function crearArrayNumerico(n) {
    if (n <= 0) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1; // Asignamos el valor de i + 1 al índice i
    }

    return arr;
}

// function crearArrayNumerico(n) {    
//     let array = [];
//     for (let i = 1; i <= n; i++) {
//         array.push(i);
//     }
//     return array;

// }

let resultado = crearArrayNumerico(longitud);
console.log(resultado); // Para ver el resultado en consola