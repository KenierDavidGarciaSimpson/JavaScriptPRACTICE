function getbyIdx (arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'Elemento no encontrado';
    }

    return arr[idx];

}

let resultado = getbyIdx([1, 2], 2);
console.log (resultado); // 2 
