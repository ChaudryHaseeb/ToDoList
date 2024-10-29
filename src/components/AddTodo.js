import React, { useState } from "react";

function AddTodo({addTodo}) {
   const [title,setTitle]=useState('');
   const [desc,setDesc]=useState('');
   const submit =(e)=>{
    e.preventDefault();
    if (!title || !desc) {
      alert('title and desc is required')
    }
addTodo(title,desc)

   }
  const handleToggle =(e)=>{
    setTitle(e.target.value);
  }
  const handleTog =(e)=>{
    setDesc(e.target.value);
  }

  return (
    <div className="container text-center my-4">
        <h1 className="bg-dark text-light">Add Todo</h1>
      <form  className="my-5" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            aria-describedby="text"
            value={title}
            onChange={handleToggle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={handleTog}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary my-2">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
