var allPokemonContainer = document.getElementById('contenedor');
var generarPoke = document.getElementById('boton');

function obtenerPokemons() {
    var pokem = Pokemon();

    // Devuelve lo que se le pide pero no muetra todos solamente muestra el ultimo 
    for (var i = 0; i < 150; i++) {
        var pokeName = document.getElementById('name');
        pokeName.innerHTML = pokem[i].name.toUpperCase();

        var pokeId = document.getElementById('pkdx_id');
        pokeId.innerHTML = "# " + pokem[i].pkdx_id;

        var pokeImg = document.getElementById('art_url');
        pokeImg.src = pokem[i].art_url;

        var pokeType = document.getElementById('types');
        pokeType.innerHTML = "Tipos: " + pokem[i].types;
    }

    // no genera lo que se le pide y paraece raro que no lo haga
    /* for (var i = 0; i <= 150; i++) {
        var pokeContenedor = document.createElement('div');
        pokeContenedor.classList.add('contenedor');

        // var pokeContainerIMG = document.createElement('div');
        // pokeContainerIMG.classList.add('img-poke');

        var pokeName = document.createElement('h4');
        pokeName.innerHTML = pokem[i].name.toUpperCase();

        var pokeId = document.createElement('p');
        pokeId.innerHTML = pokem[i].pkdx_id;

        var pokeImg = document.createElement('img');
        pokeImg.src = pokem[i].art_url;

        var pokeType = document.createElement('p');
        pokeType.innerHTML = "Tipos: " + pokem[i].types;

        pokeContenedor.append(pokeImg, pokeName, pokeId, pokeType);

        allPokemonContainer.append(pokeContainer);
    } */
}

// se hace una funcion para que pueda obtener todo lo que esta en la funcion 
const makeEverything = () => {
    obtenerPokemons();
}

// genera el pkemon cuando se le da click 
generarPoke.addEventListener('click', makeEverything);