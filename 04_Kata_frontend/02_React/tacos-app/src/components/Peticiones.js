import { useEffect, useState } from 'react'
import axios from 'axios';
import Tacos from './Tacos';

const Peticiones = () => {
    const [taco, setTaco] = useState({})

    const tacosApi = 'http://taco-randomizer.herokuapp.com/random/';

    const getTaco = async () => {
        try {
            const response = await axios.get(tacosApi);
            setTaco(response.data)
            console.log(response.data);
        }
        catch (error) {
            alert('Ocurrio un error al pedir el taco')
        }
    }

    useEffect(() => {
        setTimeout(getTaco, 1500)
    }, [])

    return(
        <>
        <h1>Tacos</h1>
        { taco.condiment ?
            <Tacos taco={taco}/>
            : <span>Estamos Eligiendo un taco para ti </span>
        }
        </>
    )

}

export default Peticiones;
// http://taco-randomizer.herokuapp.com/random/