import { INPUT_CHANGE, ADD_TODO, SET_TODOS, SET_UPDATED_TODOS } from '../actions'

const initialState = {
    inputVal: '',
    todoList: null,
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList].concat(action.item.data),
                inputVal: ''
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputVal: action.item
            }
        case SET_TODOS:
            return {
                ...state,
                todoList: action.item.data
            }
        case SET_UPDATED_TODOS: 
            const updatedTodos = state.todoList.map((todo) => {
                if (todo._id == action.item.data._id){
                    todo.completed = action.item.data.completed
                }
                return todo
            })

            return {
                ...state,
                todoList: updatedTodos
            }
        default:
            return state
    }
}