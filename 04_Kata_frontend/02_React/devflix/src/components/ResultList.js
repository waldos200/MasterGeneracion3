import React, { useState, useEffect } from 'react';
import './ResultList.css';

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
                        <div className="carta">
                            <img src={show.image.original} alt={show.name}/>
                            <h2>
                                {show.name}
                            </h2>
                            <small>
                                {show.id}
                            </small>
                            <p>
                                {show.summary}
                            </p>
                        </div>
                    )
                )
            }
        </div>
    ) : ( <h2> No encontramos nada al respecto </h2> )
}

export default ResultList;