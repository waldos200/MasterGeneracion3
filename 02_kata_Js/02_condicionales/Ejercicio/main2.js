var us1 = prompt("Digite piedra, papel o tijera").toLowerCase();
var us2 = prompt("Digite piedra, papel o tijera").toLowerCase();

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