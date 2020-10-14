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
    return (n1 + n2);
}
console.log(sumar(2, 3));

// Ejercicio 2
// hacer una funcion que reste dos parametros
function restar(n1, n2) {
    return (n1 - n2);
}
console.log(restar(8, 2));

