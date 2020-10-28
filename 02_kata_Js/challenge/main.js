function obtenerPokemons(){
    var pokem = Pokemon();

    var pokeName = document.getElementById('name');
    pokeName.innerHTML = pokem[0].name.toUpperCase();

    var pokeId = document.getElementById('pkdx_id');
    pokeId.innerHTML = pokem[0].pkdx_id;

    var pokeImg = document.getElementById('art_url');
    pokeImg.src = pokem[0].art_url;
    
    var pokeType = document.getElementById('types');
    pokeType.innerHTML = "Tipos: " + pokem[0].types;
}