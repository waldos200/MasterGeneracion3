import React from 'react';
import { useCharacterContext } from '../context/CharacterContext'

const DetallesCharacter = () => {
    const { selectedCharacter } = useCharacterContext();
    return (
        <>
            <h1>Aqui esta tu personaje!!</h1>
            {
                selectedCharacter.name
                ?
                    (
                        <>
                            <h2>{selectedCharacter.name}</h2>
                            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                        </>
                    )
                : <h2>Seleccioa un personaje</h2>
            }
        </>
    );
}

export default DetallesCharacter;