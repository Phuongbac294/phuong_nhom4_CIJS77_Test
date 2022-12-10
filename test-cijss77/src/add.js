import { useState, useContext } from "react";
import { AddToDo } from "./context/addtodo";


export default function Add() {
const addTodo = useContext(AddToDo)
const [input, setInput] = useState('')

const AddTodos = () => {
    addTodo.value.setTodos(prev => [...prev, input])
    setInput('')
}

    return (
        <div className="container">
            <from className="container-from">
                <input type="text" className="input" placeholder="Enter here..."
                
                value={input} onChange={e=>setInput(e.target.value)}/>
                <button className="btn btn-add" onClick={AddTodos}>ADD</button>
            </from>

            <ul className="container-list">
                {addTodo.value.todos.map((item, index) => 
                <li className='container-item' key={index}>
                    <input type="checkbox" className="checkbox"/>
                    <span className="todos">{item}</span>
                </li>)}
                {addTodo.value.completedWork.map((item, index) => 
                <li className='container-item' key={index}>
                    <input type="checkbox" className="checkbox"/>
                    <span className="todos">{item}</span>
                </li>)}
            </ul>
        </div>
    )
}