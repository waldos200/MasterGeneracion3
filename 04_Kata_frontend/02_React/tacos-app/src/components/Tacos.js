import React from 'react';

const Tacos = ({taco}) => {

    return(
        <>
        <p>
            {taco.base_layer.name}
        </p>
        <p>
            {taco.mixin.name}
        </p>
        <p>
            {taco.condiment.name}
        </p>
        <p>
            {taco.seasoning.name}
        </p>
        <p>
            {taco.shell.name}
        </p>
        </>
    )

}

export default Tacos;