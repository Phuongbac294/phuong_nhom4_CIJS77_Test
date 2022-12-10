import { useState, useContext } from "react";
import { AddToDo } from "./context/addtodo";


export default function Completed() {
const addTodo = useContext(AddToDo)

const CompletedList = (name, index) => {
    const [line, setLine] = useState(true)
    
    
    const onLine = () => {
        setLine(!line)       
        
    }
     const Text =() => {
        if (line === true) { return ''}
        else { return 'text' }
     }

    const Del = () => {
        
    }
    return (
        <li className='container-item delete-item' key={index}>
                    <div className='container-item'>
                        <input type="checkbox" className="checkbox" 
                        onChange={onLine}/>
                        <span  className={Text()}>{name}</span>
                    </div>
                    <span className="delete" onClick={Del}>Del</span>
                </li>
    )
}

const Delete = () => {
    addTodo.value.setCompletedWork([])
}

    return (
        <div className="container">           
            <ul className="container-list">
                {addTodo.value.completedWork.map((item, index) => 
                CompletedList(item, index)
                )}
            </ul>
            <button className="btn btn-del" onClick={Delete}>Delete</button>
        </div>
    )
}