export const ADD_TODO = 'ADD_TODO'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const SET_TODOS = 'SET_TODOS'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_SELECTED_TODOS = 'REMOVE_SELECTED_TODOS'
export const EDIT_INPUT_CHANGE = 'EDIT_INPUT_CHANGE'
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'

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
            .then((todo) => {
                dispatch({ type: ADD_TODO, item: todo })
            })
    }
}

export const toggleTodo = item => {
    return (dispatch) => {
        axios.put(`${url}/todo`, {id: item.id, type: 'updateCompletedVal'})
            .then((todo) => {
                dispatch({ type: TOGGLE_TODO, item: todo })
            })
    }
}

export const removeTodo = item => {
    return (dispatch) => {
        axios.delete(`${url}/todo`, {data: {id: item.id}})
            .then((todo) => {
                dispatch({ type: REMOVE_TODO, item: todo })
            })
    }
}

export const removeSelectedTodos = () => {
    return (dispatch) => {
        axios.delete(`${url}/todos`, {})
            .then((todos) => {
                dispatch({ type: REMOVE_SELECTED_TODOS, item: todos })
            })
    }
}

export const updateTodoText = item => {
    return (dispatch) => {
        axios.put(`${url}/todo`, {id: item.id, text: item.text, type: 'updateTodoText'})
            .then((todo) => {
                dispatch({ type: UPDATE_TODO_TEXT, item: todo })
            })
    }
}

export const inputChange = item => ({ type: INPUT_CHANGE, item })
export const editInputChange = item => ({ type: EDIT_INPUT_CHANGE, item })