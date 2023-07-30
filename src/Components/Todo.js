import React, { useReducer, useState } from "react";
import { reducer } from "./TodoReducer";

const Todo = () => {
    const [value, setValue] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])
    const [isEditing, setIsEditing] = useState(null)
    return (
        <div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => {
                if(!isEditing){
                    dispatch({
                    type: 'add',
                    payload: {
                        id: Math.random(),
                        element: value
                    }
                })
                } else if(value.trim()){
                    dispatch({
                        type: 'edit',
                        payload: {
                            id: isEditing,
                            element: value
                        }
                    })

                }
                
                setValue('')
                setIsEditing(null)
            }}>{!isEditing ? "Add" : "Edit"}</button>

            {
                todos.map(({ id, element }) => {
                    return (
                        <div key={id}>
                            {element}
                            <button onClick={() => {
                                dispatch({
                                    type: 'delete',
                                    payload: id
                                })
                            }}>delete</button>
                            <button onClick={() => {
                                setIsEditing(id)
                                setValue(element)
                            }}>edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todo