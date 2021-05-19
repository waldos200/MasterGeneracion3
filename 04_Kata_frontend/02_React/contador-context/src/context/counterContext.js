import React, { useState, createContext, useContext } from 'react';

const counterContext = createContext();

const CounterProvider = (props) =>{
    const [counter, setCounter] = useState(0);
    
    const value = {
        counter,
        setCounter,
    }

    return <counterContext.Provider value={value} {...props}/>
}

const useCounterContext = () => {
    const context = useContext(counterContext);
    return context;
}

export {
    CounterProvider,
    useCounterContext,
}