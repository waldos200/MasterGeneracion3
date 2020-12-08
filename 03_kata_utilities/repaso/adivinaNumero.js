/* const adivina_num = (num) => {
    let intentos = 10;
    let num_sec = Math.floor((Math.random()*100)+1);
    while (num_sec === num && intentos > 1){
        if(num_sec > num_in){
            console.log("muy bajo");
        } else {
            console.log("muy alto");
        }
        intentos++;
        console.log(`le quedan ${intentos} intentos`);
    }
    if (num_sec === num){
        console.log(`Exacto, usted adivio el numero en ${11-intentos} intentos`);
    } else {
        console.log(`El numero era ${num_sec}`);
    }
}

adivina_num(5); */

const num_adivina = (num1, num2) => {
    let numero1 = num1;
    for (let i = 9; i >= 0; i--) {
        if (numero1 === num2) {
            return console.log("El numero es correcto");
        } else if (num2 > numero1) {
            alert("El numero es menor");
            numero1 = prompt("ingresa un numero del 1 al 10");
            numero1 = Number(numero1);
        } else {
            alert("El numero es mayor");
            numero1 = prompt("ingresa un numero del 1 al 10");
            numero1 = Number(numero1);
        }
    }
    return console.log(`Se acabaron los intentos. El numero secreto es ${num2}`);
}
let num_ingre = prompt("ingresa un numero del 1 al 10");
num_ingre = Number(num_ingre);

if (num_ingre > 100 || num_ingre < 0) {
    num_ingre = prompt("ingresa un numero del 1 al 10");
    num_ingre = Number(num_ingre);
} else {
    const num_secreto = Math.floor((Math.random() * 100) + 1);
    num_adivina(num_ingre, num_secreto);
}