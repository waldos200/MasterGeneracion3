import React, { useState, useEffect } from 'react';

const ResultList = (props) => {
    const [ results, setResults ] = useState(props.results);
    useEffect(() => {
        // Se va a ejecutar cuando se carga el componente o hay un cambio en props result
        setResults(props.results)
    }, [props.results])

    return results.length > 0 ? (
        <div className="result-list">
            {
                results.map(
                    ({show}) => (
                        <li>{show.name}</li>
                    )
                )
            }
        </div>
    ) : ( <h2> No encontramos nada al respecto </h2> )
}

export default ResultList;