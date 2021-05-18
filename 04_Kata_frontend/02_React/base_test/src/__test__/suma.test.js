const suma = require('../suma');

describe('Probemos la uncion suma', () => {
    test ('vamos a sumar 1+2' , () => {
        expect(suma(1,2)).toBe(3);
    });
    
    test ('vamos a sumar 2+2 para que sea el resultado mayor a 3' , () => {
        expect(suma(2,2)).toBeGreaterThan(3);
    });
});
