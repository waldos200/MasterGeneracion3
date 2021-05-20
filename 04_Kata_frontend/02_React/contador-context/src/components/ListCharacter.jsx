import React from 'react';
import { useCharacterContext } from '../context/CharacterContext';

const ListCharacter = () =>{
    const {lista, setSelectedCharacter} = useCharacterContext();
    console.log(lista);
    return(
        <>
            <h1>Characters</h1>
            {lista.length > 0 && lista.map((character) => {
                return <h5 
                        key={character.name} 
                        onClick={
                            () => {
                                setSelectedCharacter(character)
                            }
                        }>
                            {character.name}
                        </h5>
            })
            }
        </>
    ) 
}

export default ListCharacter;