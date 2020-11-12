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

// Ejemplos

const palindrome = (cadena) => {
    let array = cadena.split("");
    let reverse = array.reverse();
    return cadena == reverse.join("") ? "Si es palindromo" : "no es palindromo";
}
console.log(palindrome("ana").toLowerCase());

const paises = ["Mexico", "Panama", "Guatemala", "El Salvador"];
const longestCountry = (paises) =>{
    console.log(...paises);
}

const farenheitToCelsius = (y) =>{
    return (y - 32) * 5/9;
}
console.log(farenheitToCelsius(64));

const ppt = (us1, us2) =>{
    if (us1 === "piedra" && us2 === "piedra" || us1 === "papel" && us2 === "papel" || us1 === "tijera" && us2 === "tijera") {
        console.log("Empate");
    } else if (us1 === "piedra" && us2 == "papel") {
        console.log("Gana la segunda persona");
    } else if (us1 === "papel" && us2 === "tijera") {
        console.log("Gana la segunda persona");
    } else if (us1 === "tijera" && us2 === "piedra") {
        console.log("Gana la segunda persona");
    } else {
        console.log("Gana la primera persona");
    }
}

console.log(ppt("piedra", "papel"));

const num = (x) =>{
    return x;
}

console.log(num(5));