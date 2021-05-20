import React from 'react';
import DetallesCharacter from './DetallesCharacter';
import ListCharacter from './ListCharacter';
import '../index.css';

const Character = () => {
    return (
        <>
            <div className="izquierda">
                <ListCharacter/>
            </div>
            <div className="derecha">
                <DetallesCharacter/>
            </div>
        </>
    )
}

export default Character;