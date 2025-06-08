// Personaje de TV
let nombre = "Goku"
let anime = "Dragon Ball"
let edad = 31;


//Se conoce esto como par llave-valor
let personaje = {
    nombre: "Goku", 
    anime: "Dragon Ball",
    edad: 31,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 33;
let llave = 'edad'
personaje [llave] = 36

delete personaje.anime;

console.log(personaje);