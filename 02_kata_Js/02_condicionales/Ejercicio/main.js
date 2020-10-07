var num = prompt("digite un numero");
num = Number(num);

var division = num % 2;

if (isNaN(num)) {
    console.log("digita un numero");
} else {
    if (division === 0) {
        console.log("El residuo es par " + division);
    } else {
        console.log("El residuo es impar " + division);
    }
}
