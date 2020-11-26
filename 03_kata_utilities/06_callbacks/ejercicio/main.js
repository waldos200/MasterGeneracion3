const { empleados, salarios } = require('./data');

const getEmployeeById = (id, callback) => {
    const empleadoDB = empleados.find(
        (empleado) => empleado.id === id
    );
    if (!empleadoDB) {
        return callback("No existe informacion de ese ID");
    }
    callback(null, empleadoDB);
};

const getSalarioById = (id, callback) => {
    const salarioDB = salarios.find(
        (salario) => salario.id === id
    );
    if (!salarioDB) {
        return callback("No existe informacion de ese ID");
    }
    callback(null, salarioDB);
};

getEmployeeById(3, (error, empleado) => {
    if (error) {
        return console.log("error", error);
    }
    console.log(empleado);
});

getSalarioById(3, (error, salario) => {
    if (error) {
        return console.log("error", error);
    }
    console.log(salario);
});