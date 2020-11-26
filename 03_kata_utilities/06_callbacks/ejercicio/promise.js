const { empleados, salarios } = require("./data");

const getEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(
            (empleado) => empleado.id === id
        )
        if (!empleadoDB) {
            return reject("No existe informacion de ese ID");
        }
        return resolve(empleadoDB);
    })
};

const getSalarioById = (id) => {
    return new Promise((resolve, reject) => {
        const salarioDB = salarios.find(
            (salario) => salario.id === id
        )
        if (!salarioDB) {
            return reject("No existe informacion de ese ID");
        }
        return resolve(salarioDB);
    })
};

getEmployeeById(3)
    .then((empleado) => console.log(empleado))
    .catch((error) => console.log(error));

getSalarioById(3)
    .then((salario) => console.log(salario))
    .catch((error) => console.log(error));