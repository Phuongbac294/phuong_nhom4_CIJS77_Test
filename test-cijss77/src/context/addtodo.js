import { createContext } from "react";
import { useState } from "react";

export const AddToDo = createContext()

export default function AddToDoProvider( { children } ) {
    const [todos, setTodos] = useState([
        'Công việc 1',
        'Công việc 2',
        'Công việc 3',
    ])

    const [completedWork, setCompletedWork] = useState([
        'Hoàn thành công việc 4',
        'Hoàn thành công việc 5'
    ])

    const [Line, setLine] = useState(true)
    const Text = () => {
        if (Line === false) return 'text'
    }
    

    const value = {
        todos, 
        setTodos,
        completedWork,
        setCompletedWork,
        Line,
        setLine,
        Text

    }
    // console.log(todos);
    return (
        <AddToDo.Provider value={ {value }}>
            {children}
        </AddToDo.Provider>
    )
    }