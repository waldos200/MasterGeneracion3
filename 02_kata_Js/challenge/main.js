var allPokemonContainer = document.getElementById('contenedor');
var generarPoke = document.getElementById('boton');

function obtenerPokemons() {
    var pokem = Pokemon();

    // genera a todos los pokemons en orden y crea los elementos
    for (var i = 0; i <= 150; i++) {
        var pokeContenedor = document.createElement('div');
        pokeContenedor.classList.add('contenedor');

        var pokeName = document.createElement('h4');
        pokeName.innerHTML = pokem[i].name.toUpperCase();

        var pokeId = document.createElement('p');
        pokeId.innerHTML = pokem[i].pkdx_id;

        var pokeImg = document.createElement('img');
        pokeImg.src = pokem[i].art_url;

        var pokeType = document.createElement('p');
        pokeType.innerHTML = "Tipos: " + pokem[i].types;

        pokeContenedor.append(pokeImg, pokeName, pokeId, pokeType);

        allPokemonContainer.appendChild(pokeContenedor);
    }
}

// se hace una funcion para que pueda obtener todo lo que esta en la funcion 
const makeEverything = () => {
    obtenerPokemons();
}

// genera el pkemon cuando se le da click 
generarPoke.addEventListener('click', makeEverything);