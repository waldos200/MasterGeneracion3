import React from 'react';

const Tacos = ({taco}) => {

    return(
        <>
        <table>
            <tr>
                <td> 
                    Nombre Taco: 
                </td>
                <td>
                    {taco.base_layer.name}
                </td>
            </tr>
            <tr>
                <td>
                    Nombre del mix: 
                </td>
                <td>
                    {taco.mixin.name}
                </td>
            </tr>
            <tr>
                <td>
                    Nombre Condimento: 
                </td>
                <td>
                    {taco.condiment.name}
                </td>
            </tr>
            <tr>
                <td>
                    Nombre Sasonador: 
                </td>
                <td>
                    {taco.seasoning.name}
                </td>
            </tr>
            <tr>
                <td>
                    nombre shell: 
                </td>
                <td>
                    {taco.shell.name}
                </td>
            </tr>
        </table>
        </>
    )

}

export default Tacos;