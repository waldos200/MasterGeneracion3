import React, { Component } from 'react';

class HolaMundoClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto: 'Hola a todos desde el componente',
            edad: 20,
        }
    }

    componentDidMount() {
        console.log('se monta el componete');
        setTimeout(
            () => {
                this.setState(
                    {
                        texto: 'Se actualizo el componente'
                    }
                )
            },
            3000
        )
    }

    render() {
        const { texto, edad } = this.state;

        return (
            <>
                <h1> Componente Hola Mundo</h1>
                <h2> {texto} </h2>
                <h2> {edad} </h2>
            </>
        );
    }
}

export default HolaMundoClass;