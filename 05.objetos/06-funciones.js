function Usuario (nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);// cantidad de arguemntos que recibe la funcion

const  U = Usuario
let user = new U ('Kenier');

console.log(user);

function of(Fn , arg) {
    return new Fn(arg); //recibe una funcion y un argumento

}

let user1 = of (Usuario, 'Austin');
console.log(user1);

function returned() {
    return function(){
        console.log('Hola mundo');
        
    }
}

let saludoo = returned();
saludoo();