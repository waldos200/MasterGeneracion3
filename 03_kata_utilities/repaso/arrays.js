/* 
1 .- Crear una función que encuentre el número más repetido en un array
Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6 
*/
const miArreglo = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6, 8, 8, 9, 8];

const repetido = (arreglo) => {
    /* arreglo.sort();
    let numRep = [];
    for (let i = 0; i < arreglo.length; i++) {
        const element = arreglo[i];
        // console.log(arreglo[i-1] + " Elemento anterior");
        // console.log(element + " elemento");
        if (arreglo[i-1] === arreglo[i]) {
            numRep.push(element);
        }
    }
    console.log(numRep); */
    let filtrado = arreglo
        .filter(
            (elemento, index, arr) => 
                arreglo.indexOf(elemento) != index
    ) 
    if(filtrado.length > 2){
        return repetido(filtrado);
    } 
    return filtrado
}
console.log(repetido(miArreglo));