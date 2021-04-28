import React, { useState } from 'react';
import ResultList from './ResultList';
import { searchShow } from '../utils/API';

const Peticiones = () => {
    const [ search, setSearch ] = useState('');
    const [ results, setResults ] = useState([]);
    const makeSearch = () => {
        searchShow(search).then((response) => {
            setResults(response.data)
        }).catch(() => {
            setResults([])
        })
    }

    return(
        <div className="main">
            <h1>DEVFLIX</h1>
            <div className="search-box">
                <input 
                type="text" 
                name="search"
                onChange={(event) => setSearch(event.target.value)}
                value={search}/>
                <button type="button" onClick={makeSearch}>Buscar</button>
                <ResultList results={results}/>
            </div>
        </div>
    )
}

export default Peticiones;
