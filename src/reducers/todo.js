import { INPUT_CHANGE, ADD_TODO } from '../actions'

const initialState = {
    inputVal: '',
    todoList: null,
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                inputVal: ''
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputVal: action.item
            }
        default:
            return state
    }
}