let user = {
    email: 'kenierdavid@gmail.com',
    name: 'Kenier David',
    dirreccion: {
        calle: 'Calle Cerezos',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () {
        console.log('Se ha enviado un correo a ' + this.email + ' para recuperar la clave.');
    }
}
