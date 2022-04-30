import React from "react";
import Draggable from "react-draggable";
import { ITodo } from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
    onDelete: (id: number) => void
    onHandle: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onDelete, onHandle}) => {
    if(todos.length === 0) {
        return <p className='text-center font-bold text-2xl'>Поки немає нічого</p>
    }
    return (
       
        <ul>
            {todos.map(todo => {
                return (
                    <Draggable defaultPosition={todo.defaultPos}>
            <li key={todo.id} className="mb-3 text-black w-[240px] mx-auto ">
                <label className="flex  items-center justify-between cursor-pointer p-3 rounded-xl" style={{ backgroundColor: "#" + `${todo.randomColor}` }}>
                    <input onClick={() => onHandle(todo.id)} type="checkbox" checked={todo.completed}/>
                    <span>{todo.title}</span>
                    <button onClick={() => onDelete(todo.id)}>X</button>
                </label>
            </li>
            </Draggable>
                )
            })}
            
        </ul>
        
    )
}