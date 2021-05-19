import React from 'react';
import { useCounterContext } from '../context/counterContext';

const Contador = () => {

    // const counterContextGlobal = useCounterContext();
    // console.log(counterContextGlobal);

    // const contador = counterContextGlobal.counter;
    // const setCounter = (value) => {
    //     return counterContextGlobal.setCounter(value)
    // }

    // return ( 
    //     <>
    //     <h1>
    //     Contador
    //     </h1> 
    //     {contador}
    //     <div>
    //         <button onClick={() => {
    //             setCounter(contador + 1)}}>Sumar</button>
    //         <button onClick={() => {
    //             setCounter(contador - 1)}}>Restar</button>
    //     </div>
    //     </>)
    const { counter, setCounter } = useCounterContext();

    return(
        <>
            <h1>
                Contador
            </h1>
            <h2>
                {counter}
            </h2>
            <div>
                <button onClick={
                    () => {
                    setCounter(counter + 1)}}>
                    Sumar
                </button>
                <button onClick={
                    () => {
                    setCounter(counter - 1)}}>
                    Restar
                </button>
            </div>
        </>
    )
}

export default Contador;