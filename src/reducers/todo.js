import { INPUT_CHANGE, ADD_TODO, SET_TODOS } from '../actions'

const initialState = {
    inputVal: '',
    todoList: null,
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todoList: action.item.data,
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
        default:
            return state
    }
}