import { useState, useEffect } from 'react';

const Reloj = () => {
    const [ pokemon, setPokemon ] = useState('...loading');
    const [ timer, setTimer ] = useState(new Date().toLocaleTimeString());
    const [ visible, setVisible ] = useState(false);

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(data=> setPokemon(data.name))
    }, []);

    useEffect( () => {
        setTimeout( () => {
            setTimer(new Date().toLocaleTimeString())
        }, 1000);
    });

    return (
        <>
            <h2> 
                Reloj 
            </h2>
            {visible && <h3> Hora actual: {timer} </h3>}
            <button onClick={ () => setVisible(true)}>Mostrar</button>
            <button onClick={ () => setVisible(false)}>Ocultar</button>
            <h3>
                Pokemon: {pokemon}
            </h3>
        </>
    );
}

export default Reloj;