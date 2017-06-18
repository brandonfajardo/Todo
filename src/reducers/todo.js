import { INPUT_CHANGE } from '../actions'

const initialState = {
    inputVal: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case INPUT_CHANGE:
            return {
                ...state,
                inputVal: action.item
            }
        default:
            return state
    }
}