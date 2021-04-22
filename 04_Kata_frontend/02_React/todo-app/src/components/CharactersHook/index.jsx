import { useState, useEffect } from 'react';

const Character = (character) => {
    const {name, image} = character.character;

    return(
        <>
            <h2>nombre: {name}</h2>
            <img src= {image} alt="{name}"/>
        </>
    );
}

const CharacterHook = () => {
    const [ characters, setCharacter ] = useState([])
    const [ visible, setVisible ] = useState(false);

    const fetchApi = () => {
        fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 671)+1}`)
            .then(response => response.json())
            .then(data => setCharacter([...characters, data]));
    }

    useEffect(() => {
        fetchApi();
    }, [])

    useEffect(() => {
        setTimeout( () => {
            fetchApi();
        },10000)
    });

    return (
        <>
            {/* <h1>
                Lista de personajes:
            </h1> 
            
          
            {characters.map(
                (character, index) => <Character character={character} key={`charakter${index}`}/>
            )} */}
            {visible && <h3> Lista de personajes: {characters.map((character, index) => <Character character={character} key={`characters${index}`}/>)} </h3>}
            <button onClick={ () => setVisible(true)}>Mostrar</button>
            <button onClick={ () => setVisible(false)}>Ocultar</button>
        </>
    );
}

export default CharacterHook;