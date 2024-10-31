let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = { // Objeto literal
    nombre: "Tanjiro", //Par llave - valor (propiedad)
    anime: "Demon Slayer",
    edad: 16,
}; 

console-console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime; //Para eliminar una propiedad del objeto
console.log(personaje);

