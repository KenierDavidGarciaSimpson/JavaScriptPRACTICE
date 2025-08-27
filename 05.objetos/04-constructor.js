//{id: 1, recuperarClave: function(){}}
function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){
        console.log('Recuperando clave para el usuario con email ' );
    }

}

let usuario = new Usuario();
console.log(usuario);