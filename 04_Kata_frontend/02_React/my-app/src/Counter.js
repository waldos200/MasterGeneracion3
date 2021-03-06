// El componente siempre inicia con mayusculas
// Importar React
// El componente y el archivo se deben llamar igual
// Exportar el componente

import React from 'react';

class Counter extends React.Component {

    constructor(props){
        // El constructor recibe como argumento las propieades -> props
        // Atributos asignados cuando llamamos el componente en un componente padre 
        super(props);
        this.state = {
            cout: parseInt(props.init)
        }
    }

    render(){
        return (
            <>
            {/* En jsx la apertura de llaves significa que abra codigo de js que devolera un valor */}
            <h1>{this.props.title}</h1>
            <button onClick={() => { this.setState({cout:this.state.cout + 1}) }}>
                Sumar
            </button>
            <h4>{this.state.cout}</h4>
            <button onClick={()=>{this.setState({cout:this.state.cout -1})}}>
                Restar
            </button>
            <button onClick={()=>{this.setState({cout: Number(0)})}}>
                reiniciar
            </button>
            </>
        )
    }

}

export default Counter;