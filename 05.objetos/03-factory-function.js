function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando la clave');
        },
    };

}

let user1 = crearUsuario('Kenier', 'kenierdavid@gmail.com')
let user2 = crearUsuario('Austin', 'josefelipe@gmail.com')

console.log(user1, separator = '\n' , user2);