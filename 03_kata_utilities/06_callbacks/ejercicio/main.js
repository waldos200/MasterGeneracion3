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
    // Codigo para traerme el salario
}

getEmployeeById(3, (error, empleado) => {
    if (error) {
        return console.log("error", error);
    }
    console.log(empleado);
});