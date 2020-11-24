// const name = "Waldo";
//console.log(`hola ${name}`);

const a = 10;
const b = 20;
console.log(`resultados: `, a + b);

function saludar(name) {
    console.log(name);
    let mensaje = `Hola ${name}`;
    return mensaje;
}

let saludo = saludar("Waldo");
console.log(saludo);

console.log("Inicio del programa");
setTimeout (() => {
    console.log("primer timeout");
}, 3000);

setTimeout (() => {
    console.log("segundo timeout");
}, 2);

setTimeout (() => {
    console.log("tercero timeout");
}, 0);

console.log("fin del programa");