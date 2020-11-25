// console.log("Hola a todos");

const timer = (otraFuncion, time) => {
    console.log("funcion ", otraFuncion);
    console.log("time ", time);
    for (let index = 0; index <= time; index++) {
        if (index === time) {
            otraFuncion();
        }
    }
};

const saludo = () => {
    console.log("Hola a todos");
}

timer(saludo, 1000);