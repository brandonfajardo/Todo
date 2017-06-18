export const ADD_TODO = 'ADD_TODO'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const SET_TODOS = 'SET_TODOS'

import axios from 'axios' // Fetch library
const url = 'http://localhost:3000'

export const getTodos = () => {
    return (dispatch) => {
        axios.get(`${url}/todo`)
            .then((todos) => {
                dispatch({ type: SET_TODOS, item: todos })
            })
    }
}

export const addTodo = item => {
    return (dispatch) => {
        axios.post(`${url}/todo`, { text: item })
            .then((newTodoList) => {
                dispatch({ type: ADD_TODO, item: newTodoList })
            })
    }
}

export const inputChange = item => ({ type: INPUT_CHANGE, item })