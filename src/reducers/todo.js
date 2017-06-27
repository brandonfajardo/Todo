import { INPUT_CHANGE, ADD_TODO, SET_TODOS, TOGGLE_TODO, REMOVE_TODO, REMOVE_SELECTED_TODOS, EDIT_INPUT_CHANGE, UPDATE_TODO_TEXT } from '../actions'

const initialState = {
    inputVal: '',
    todoList: null,
    editInputVal: null
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
        case TOGGLE_TODO:
            let updatedTodos = state.todoList.map((todo) => {
                if (todo._id == action.item.data._id){
                    todo.completed = action.item.data.completed
                }
                return todo
            })

            return {
                ...state,
                todoList: updatedTodos
            }
        case REMOVE_TODO:
            let updatedTodoList = state.todoList.filter((todo) => {
                if (todo._id == action.item.data._id){
                    return false
                }
                return todo
            })

            return {
                ...state,
                todoList: updatedTodoList
            }
        case REMOVE_SELECTED_TODOS:
            return {
                ...state,
                todoList: action.item.data
            }
        case EDIT_INPUT_CHANGE: 
            return {
                ...state,
                editInputVal: action.item
            }
        case UPDATE_TODO_TEXT:
            let todos = state.todoList.filter((todo) => {
                if (todo._id == action.item.data._id){
                    todo.text = action.item.data.text
                }
                return todo
            })

            return {
                ...state,
                todoList: todos,
                editInputVal: null
            }
        default:
            return state
    }
}