import React from 'react';
import { useCharacterContext } from '../context/CharacterContext';

const Character = () =>{
    const {lista} = useCharacterContext();
    console.log(lista);
    return(
        <>
            <h1>Characters</h1>
            {lista.length > 0 && lista.map((character) => {
                return <h5 key={character.name}>{character.name}</h5>
            })}
        </>
    ) 
}

export default Character;