export const ADD_TODO = 'ADD_TODO'
export const INPUT_CHANGE = 'INPUT_CHANGE'

export const addTodo = item => ({ type: ADD_TODO, item })
export const inputChange = item => ({ type: INPUT_CHANGE, item })