function StorageHand(){
    const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [
        {
            title : 'Todo1',
            status : true,
            id : 1203
        }
    ]

    return {
        updateTodoMemory : () => {
            console.log(todos)
            localStorage.setItem('todos',JSON.stringify(todos))
        },
        addTodo : (todo) => {
            todos.push(todo)
            updateTodoMemory()
        },
        getTodo : () => {
            return todos
        },
        updateTodo : ({id,status}) =>{
            todos.forEach(itm=>{
                itm.status = (itm.id == id) ? status : itm.status
            })
            updateTodoMemory()
        }
    }
}

export const storageHandler = StorageHand()

function updateTodoMemory(){
    storageHandler.updateTodoMemory()
}