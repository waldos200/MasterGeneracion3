import React, { useEffect, useState } from 'react';
import ResultList from './ResultList';
import { searchShow } from '../utils/API';
import useDebounce from '../hooks/useDebounce';

const Peticiones = () => {
    const [ search, setSearch ] = useState('');
    const [ results, setResults ] = useState([]);
    const searchTerm = useDebounce(search, 500);

    const makeSearch = (term) => {
        searchShow(term).then((response) => {
            setResults(response.data)
        }).catch(() => {
            setResults([])
        })
    }

    useEffect(() => {
        if(searchTerm){
            makeSearch(searchTerm)
        }
    }, [searchTerm])

    return(
        <div className="main">
            <h1>DEVFLIX</h1>
            <div className="search-box">
                <input 
                type="text" 
                name="search"
                onChange={(event) => setSearch(event.target.value)}
                value={search}/>
                {/* <button type="button" onClick={makeSearch}>Buscar</button> */}
                <ResultList results={results}/>
            </div>
        </div>
    )
}

export default Peticiones;
