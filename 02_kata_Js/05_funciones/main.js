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

