function storage() {

    const entries = localStorage.getItem('diary-entry') ? JSON.parse(localStorage.getItem('diary-entry')) : [
        { 'year': 2020, 'month': 2, 'day': 22, 'content': 'Hey there', id: 111 },
    ]

    return {
        updateTodoMemory: () => {
            console.log(entries)
            localStorage.setItem('diary-entry', JSON.stringify(entries))
        },
        addEntry: (entry) => {
            entries.push(entry)
            updateTodoMemory()
        },
        getEntries: (id) => {
            if (id) {
                return entries.filter(a => a.id === id)
            }
            return entries
        },
        updateEntry: (item,id) => {
            entries.forEach((itm,i) => {
                if(itm.id==id){
                    console.log("found ii")
                    item.id = id
                    entries[i] = item
                }
            })
            updateTodoMemory()
        }
    }
}

export const storageHandler = storage()

function updateTodoMemory() {
    storageHandler.updateTodoMemory()
}