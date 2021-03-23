import React, { useState } from 'react';
import { storageHandler } from "../modal/storage";


function App() {

    const eachTodo = (itm) => {
        return <div>{itm.title}</div>;
    }
    
    const [todoTitle, setTodoTitle] = useState('')
    
    function addTodo() {
        console.log(this, todoTitle)
        storageHandler.addTodo({
            title: todoTitle,
            id: (new Date()).getTime(),
            status: false
        })
    }
    function loadTodoList() {
        return <div className="todoGroup">
            {storageHandler.getTodo().map(eachTodo)}
            <div><input placeholder="Enter todo" onChange={e => setTodoTitle(e.target.value)} /><button onClick={addTodo} >Add</button></div>
        </div>
    }

    return <div className="hello">
        <h2>Todo App</h2>
        {loadTodoList()}
    </div>
}

export default App;