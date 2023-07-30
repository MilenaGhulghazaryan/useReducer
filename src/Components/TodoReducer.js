

export const reducer = (todos, action) => {
    if (action.type === 'add') {
        todos = [...todos, action.payload]
        return todos
    } else if (action.type === 'delete') {
        todos = todos.filter(val => val.id !== action.payload)
        return todos
    }
     else if (action.type === 'edit') {
     todos.find(val=>val.id === action.payload.id).element = action.payload.element
        return todos
        
    }
}