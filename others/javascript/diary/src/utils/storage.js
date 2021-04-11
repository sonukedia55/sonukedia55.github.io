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
        getEntries: () => {
            // console.log({year,month},"called")
            // if (id) {
            //     return entries.filter(a => a.id === id)
            // }
            // else if (year && month) {
            //     return entries.filter(a => a.year == year && a.month == month)
            // }
            // else if (year) {
            //     return entries.filter(a => a.year == year)
            // }
            return entries
        },
        updateEntry: ({ id, date, text }) => {
            entries.forEach(itm => {
                itm.content = (itm.id == id) ? text : itm.content;
            })
            updateTodoMemory()
        }
    }
}

export const storageHandler = storage()

function updateTodoMemory() {
    storageHandler.updateTodoMemory()
}