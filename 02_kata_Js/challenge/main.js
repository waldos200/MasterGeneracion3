import pokedex from './poke';


document.write('./poke.js');




mira es otra opcion:

Una forma más bonita sería crear tu propia función sin preocuparte de si se llama de manera síncrona o asíncrona:

function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
Y llamar a la función cada vez que quieras importar:

importarScript("codigo1.js");
importarScript("codigo2.js");
importarScript("codigo3.js");
