import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = createContext();

const CharacterProvider = (props) => {
    const [lista, setLista] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState({});

    const characterApi = 'https://rickandmortyapi.com/api/character'

    const getCharacter = async () => {
        try {
            const response = await axios.get(characterApi);
            setLista(response.data.results);
        }
        catch (error) {
            alert('Ups no lo conseguimos');
        }
    }

    useEffect(() => {
        getCharacter();
    }, []);

    console.log(lista);
    
    const value = {
        lista,
        selectedCharacter,
        setSelectedCharacter,
    }

    return <CharacterContext.Provider value={value} {...props}/>
}

const useCharacterContext = () =>{
    const context = useContext(CharacterContext);
    return context;
}

export {
    CharacterProvider,
    useCharacterContext,
}