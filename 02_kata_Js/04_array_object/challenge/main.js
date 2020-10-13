var animales = [
    {
        nombre: 'Vaca',
        comida: true
    },
    {
        nombre: 'Aguila',
        comida: false
    },
    {
        nombre: 'Ballena',
        comida: false
    },
    {
      nombre: 'Murcielago',
      comida: true,
    }
];

animales.forEach(miFuncion);

function miFuncion(item){
    console.log(item);
}

/* for (var i = 0; i < animales.length; i++){
    console.log(animales[i]);
} */