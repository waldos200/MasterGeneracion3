import React from 'react';
import { useSongContext } from './SongContext';

const ListaCanciones = () => {
    // Consumir el contexto y traerlo
    const SongGlobalState = useSongContext();

    return (
        <div>
            <h1>
                Lista canciones
            </h1>
            {SongGlobalState.lista.length > 0 && SongGlobalState.lista.map((cancion) => {
                return <h5 key={cancion.title} onClick={() => {
                    SongGlobalState.setSelectedSong(cancion);
                }}>{cancion.title}</h5>
            })}
        </div>
    )
}

export default ListaCanciones;