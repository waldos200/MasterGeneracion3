import './Todo.css'

const Todo = (props) => {
    const showCompleted = (isCompleted) => {
        return isCompleted
        ?{
            textDecorationLine: 'line-through',
            marginLeft: '20px'
        }
        :{
            marginLet: '20px'
        }
    }

    return ( 
        <div className="todo">
            <button type="button" style={{marginRight: "10px"}} onClick={() => props.delete(props.idex)}>
                Borrar
            </button>
            <input type="checkbox" checked={props.isCompleted} onChange={() => {props.setCompleted(props.index)}}/>
            <span style={ showCompleted(props.isCompleted)}>{props.text}</span>
        </div>
    )
}

export default Todo;