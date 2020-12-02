const request = require('request');

request.get("https://pokeapi.co/api/v2/pokemon/ditto", (error, response, body) => {
    if(response.statusCode === 200) {
        const data = JSON.parse(body);
        // console.log(data);
        console.log(`${data.name} 🥰`);
    } else {
        console.log(`Ocurrio un error en la peticion, ${error}`);
    }
});

const pedirPokemon = (pokemon) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (error, response, body) =>{
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            // console.log(data);
            console.log(`${data.name} 🥰`);

        }else{
            console.error(`🚫 Ocurrio un error en la peticion 🚫 ${error}`);
        }
    });
}

pedirPokemon('ditto');
pedirPokemon(500)