import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  return (
    <div className='container'>
        <h1 className='text-center my-4 bg-dark text-light'>Todos List</h1>
      {/* <TodoItem todo = {props.todo[0]}/> */}
      {props.todos.length===0 ? 'Not todo in your page': 
      props.todos.map((todo)=>{
        return <TodoItem todo = {todo} key={todo.srn} onDelete={props.onDelete}/>

      })}
    
    </div>
  )
}

export default Todos
