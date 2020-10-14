function saludar(name) {
    return "Hola" + " " + name;
}

console.log(saludar("Waldo"));

function saludar1(name) {
    if (typeof name !== "string") {
        console.log("Tienes que poner un string");
    } else {
        console.log("Hola", name);
    }
}

saludar1("Samuel");

function saludar2(name, lastName) {
    if (typeof name !== 'string' || typeof lastName !== "string") {
        return 'tienes que poner un string';
    }
    return ('hola ' + name + " " + lastName);
}

console.log(saludar2("Waldo", "Mendoza"));

// Ejercicio 1
// hacer una funcion que sume dos parametros
function sumar(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number"){
        return (n1 + n2);
    } else {
        return "No son numeros";
    }
}
console.log(sumar(2, 3));

// Ejercicio 2
// hacer una funcion que reste dos parametros
function restar(n1, n2) {
    return (n1 - n2);
}
console.log(restar(8, 2));

// Ejercicio 3
// hacer una funcion que me indique si soy mayor de edad o no
function mayorEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "No eres mayor de edad";
    }
}
console.log(mayorEdad(17));

// Ejercicio 4
// hacer una funcion que evalue si el numero es 0, positivo o negativo
function evaluar(num) {
    if (num === 0) {
        return "El valor es cero"
    } else if (num > 0) {
        return "El numero es positivo";
    } else {
        return "El numero es negativo";
    }
}
console.log(evaluar(11));

// Ejercicio 5
// hacer una funcion que retorne si es vocal o consonante
function vocales(letra) {
    if (letra !== "string") {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            console.log("Es una vocal");
        } else {
            console.log("Es una consonante");
        }
    }
}
vocales("e");

// Ejercicio 6
// hadcer una funcion para el juego de piedra papel y tijera
function jugar(us1, us2) {
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
jugar("papel", "piedra");