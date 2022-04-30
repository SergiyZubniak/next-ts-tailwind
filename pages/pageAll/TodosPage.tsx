import React,{useState, useEffect} from 'react'
import { TodoForm } from '../components/todo';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';  









const TodosPage: React.FC = () => {
    const [todos,setTodos] = useState<ITodo[]>([])



const addHandler = (title: string) => {
    
 const newTodo = {
     title: title,
     id: Date.now(),
     completed: false,
            randomColor:  Math.floor(Math.random() * 16777215).toString(16),
            defaultPos: {
                x: Math.random(), y: Math.random()
            }
            
        }
        // setTodos([newTodo,...todos])
        setTodos(prev => [newTodo, ...todos])
}

useEffect(()=> {
    document.cookie = JSON.stringify(todos)
   
    },[todos])


useEffect(()=> {
const saved = JSON.parse(sessionStorage.getItem('todos') || '[]') as ITodo[]
setTodos(saved)
},[])

useEffect(() => {
    if(todos.length !== 0) {
        sessionStorage.setItem('todos', JSON.stringify(todos))
    }   
},[todos])


const deleteHandler = (id: number) => {
    const shoudRemove = confirm('100% хоч це зробити?') ? setTodos(prev => prev.filter(todo => id !== todo.id)) : ''
}
const onHandle = (id: number) => {
   
   
    setTodos(prev => prev.map(todo => {
        if(id === todo.id) {
 return{...todo, completed:!todo.completed }
        }
        return todo}
        
        
     ))
   
    
}
console.log('here',todos);
  return (
      
    <div className='bg-gray-800 h-screen'>
   
    <TodoForm onAdd={addHandler}/>  
            <TodoList todos={todos} onDelete={deleteHandler} onHandle={onHandle}/>
    </div>
  
  )
}

export default TodosPage

