import { useState, useEffect } from 'react';

const CounterHook = () => {
    const [ number, setNumber ] = useState(0)
    const [ click, setClick] = useState(0)

    useEffect( () => {
        document.title = `Le has picado ${click} veces`
    })

    const sumar = () => {
        setNumber(number + 1)
        setClick(click + 1)
    }

    const restar = () => {
        setNumber(number - 1)
        setClick(click + 1)
    }

    const reiniciar = () => {
        setNumber(0)
        setClick(click + 1)
    }

    return (
        <>
            <h1>Contador usando Hooks</h1>
            <h4>Le has picado {click} veces</h4>
            <h3> { number === 0 ? 'No tienes cuenta' : number } </h3>
            <button onClick={ sumar } > Sumas </button>
            <button onClick={ restar } > Restar </button>
            <button onClick={ reiniciar } > Reiniciar </button>
        </>
    );
    
}

export default CounterHook;