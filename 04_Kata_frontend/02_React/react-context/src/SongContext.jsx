import React, { useState, useEffect } from 'react';
import listaDeCaciones from './listaCanciones.json'; 

// crear un contexto vacio
const SongContext = React.createContext();

// Crear el provider y la funcion retorna el componente provider del context
function SongProvider(props) {
    // Logica de como va a funcionar mi contexto
    const [lista, setLista] = useState([]);
    const [selectedSong, setSelectedSong] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setLista(listaDeCaciones);
        }, 1000)
    }, []);

    const value = {
        lista,
        selectedSong,
        setSelectedSong,
    }

    // Provider el value para funcionar
    // value: son los datos o funciones globales y accesibles
    return <SongContext.Provider value={value} {...props}/>
}

// Es el consumidor del contexto
// Quien quiera utilizar el esado del contexto tiene que ejecuar esta funcion
const useSongContext = () => {
    const context = React.useContext(SongContext);
    return context;
}

export {
    SongProvider,
    useSongContext,
}