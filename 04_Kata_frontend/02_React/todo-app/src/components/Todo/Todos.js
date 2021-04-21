import { useState } from 'react';
import Todo from './Todo';

const CreateTodo = (props) => {

    const [newTodo, setNewTodo] = useState("");
    
    return (
        <div>
            <input type="text" placeholder="Agrega un texto" onChange={e => setNewTodo(e.target.value)}/>
            <button type="button" onClick={() => {props.addTodo(newTodo)}}>
                Agregar
            </button>
        </div>
    )
}

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Repasar ReactHooks',
            isCompleted: false
        },
        {
            text: 'Kata JS',
            isCompleted: true
        }
    ]);
    
    const setCompleted = (index) => {
        const myTodos = [...todos]
        const isCompleted = myTodos[index].isCompleted
        myTodos[index].isCompleted = !isCompleted
        setTodos(myTodos)
    }
    
    const addTodo = (todoText) => {
        const myTodos = [
            ...todos, 
            {text: todoText, isCompleted: false}
        ]
        setTodos(myTodos)
    }

    const deleteTodos = (index) => {
        const myTodos = [...todos]
        myTodos.splice(index, 1)
        setTodos(myTodos)
    }

    return(
        <>
            <h1>
                Todos App
            </h1>
            <CreateTodo addTodo={addTodo}/>
            {
                todos.map((todo, index)=>{
                    return <Todo
                        key={index}
                        index={index}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        setCompleted={setCompleted}
                        delete={deleteTodos}
                    />
                })
            }
        </>
    )
}

export default Todos