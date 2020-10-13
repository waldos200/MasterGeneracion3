// ----------- Array o arreglos -----------

// posicion    0        1         2   
var color = ["Azul", "Verde", "Naranja"];

console.log(color);
console.log(color[1]);
console.log(color[2]);

// ----------- Metodos -----------
// .push();
// Empuja un valor en la ultima posicion
color.push("Negro");
color.push("Blanco");
color.push("Rosa");

console.log(color);

// .pop();
// Eliminar el ultimo valor
color.pop();
color.pop();

console.log(color);

// .splice();
// 1 donde vamos a empezar
// 2 cuantos elementos
// 3 sustituir
//           1  2         3
color.splice(2, 0, "Cafe", "Rojo");
console.log(color);

// ----------- objetos o objects -----------
// var objeto = {}
var persona = {
    nombre: "Waldo",
    edad: 20,
    cel: "+503 24679345",
    musica: {
        banda: "Banda",
        Kpop: "K-pop",
        rock: "Kiss",
        trap: "Duki"
    },
    peliculas: ["RF1", "RF2", "RF3", "RF10"]
};

console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.musica.rock);
console.log(persona.peliculas[2]);

// arreglo de objetos
var animales =[
    {
        nombre: "Vaca",
        comida: true
    },
    {
        nombre: "Aguila",
        comida: false
    },
    {
        nombre: "Ballena",
        comida: false
    },
    {
        nombre: "Murcielago",
        comida: true
    }
];

console.log(animales);
console.log(animales[3]);
console.log(animales[3].nombre);