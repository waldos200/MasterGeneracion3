import { useState } from 'react';

const CounterHook = () => {
    const [ number, setNumber ] = useState(0)

    return (
        <>
            <h1>Contador usando Hooks</h1>
            <h3> { number } </h3>
            <button onClick={ () => setNumber( number + 1 ) } > Sumas </button>
            <button onClick={ () => setNumber( number - 1 ) } > Restar </button>
            <button onClick={ () => { setNumber(0) } } > Reiniciar </button>
        </>
    );
    
}

export default CounterHook;