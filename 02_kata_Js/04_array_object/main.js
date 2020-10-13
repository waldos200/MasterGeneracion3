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
color.splice(2, 0, "Cafe", "Rojo");
console.log(color);

