const string = "Hola Mundo";
const fruits = ['apple', 'banana']

describe('Probando funcionalidades de JEST', () => {
    test('La variable debe contener un texto', () => {
        expect(string).toMatch(/Mundo/);
    });

    test('El arreglo de frutas tiene bananas', () => {
        expect(fruits).toContain('banana')
    });
});