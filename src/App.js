import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
// import About from "./components/About";
function App() {
  let initeTodo;
  if (localStorage.getItem('todos')===null) {
    initeTodo =[];
    
  } else {
    initeTodo = JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete =(todo)=>{
    console.log('your file is deleting',todo)
    setTodo(todos.filter((e)=>{
      return e!==todo

    }))
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  const addTodo =(title,desc)=>{
    let srn;
    if (todos.length===0) {
      srn = 1;
      
    } else {
      srn = todos[todos.length-1].srn + 1;
      
    }
    const myTodo={
      srn:srn,
      title:title,
      desc:desc
    }
    setTodo([...todos,myTodo])
    console.log(myTodo)
  }
  const [todos,setTodo]=useState(initeTodo)
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))

  },[todos]);
  return (
    <>
      {/* <Navbar title='Todos-List' About='About' searchbar={false}/> */}
      <Navbar title="Todos-List" About="About" />
      {/* <About/> */}
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
