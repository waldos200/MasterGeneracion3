const Todo = (props) => {
    const showComplete = (isComplete) => {
        return isComplete
        ?{
            TextDecorationLine: 'line-througth',
            marginLeft: '20px'
        }
        :{
            marginLet: '20px'
        }
    }

    return ( 
        <div>
            <button type="button" style={{marginRight: "10px"}} onClick={() => props.delete(props.idex)}>
                Borrar
            </button>
            <input type="checkbox" checked={props.isComplete} onChange={() => {props.setComplete(props.isComplete)}}/>
            <span>
                {props.text}
            </span>
        </div>
    )
}

export default Todo;