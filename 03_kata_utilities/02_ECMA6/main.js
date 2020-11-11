// Vanilla JS
var x = 10;
console.log(x);

x = 500;
console.log(x);

var x = "hola";
console.log(x);

// ECMA6
// let
let y = 50;
console.log(y);

y = 100;
console.log(y);
// const
const z = "500";
console.log(z);

// spread operator
let frutas = ["sandia", "melon", "platano"];
console.log(frutas);
console.log(...frutas);
console.log("Sandia", "Melon", "Platano");

// String Template
let name = "Waldo";
let saludo = "Hola";

// Hola, Waldo, Como estas
console.log(saludo + ", " + name + ", como estas?");

console.log(`${saludo}, ${name}, como estas?`);

// Arrow function o funciones de flecha
const suma = (a, b) => {
    return a + b;
};
suma(5, 10);