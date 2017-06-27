import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inputChange, addTodo, getTodos, toggleTodo, removeTodo, removeSelectedTodos } from '../actions' 

class TodoList extends Component {
    constructor(props){
        super(props)

        this.onInputChange = this.inputChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.onCheckboxChange = this.onCheckboxChange.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onRemoveSelected = this.onRemoveSelected.bind(this)
    }

    componentWillMount(){
        this.props.getTodos()
    }

    inputChange(e){
        this.props.inputChange(e.target.value)
    }

    onAdd(){
        this.props.addTodo(this.props.inputVal)
    }

    onCheckboxChange(id, completed){
        this.props.toggleTodo({id, completed})
    }

    onRemove(id){
        this.props.removeTodo({id})
    }

    onRemoveSelected(){
        console.log('yo')
        this.props.removeSelectedTodos()
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <input
                    type="text"
                    value={this.props.inputVal}
                    onChange={(e) => this.onInputChange(e)}
                />
                <button onClick={this.onAdd}>Add</button> <br /><br />
                <button onClick={this.onRemoveSelected}>Remove Selected</button>
                <ul>
                    {this.props.todoList && this.props.todoList.map((todo) => {
                        return (
                            <li>
                                <input 
                                    checked={todo.completed}
                                    type="checkbox"
                                    onChange={() => this.onCheckboxChange(todo._id, todo.completed)}
                                />
                                {todo.text}
                                <span onClick={() => this.onRemove(todo._id)} style={{marginLeft: '20px', cursor: 'pointer'}}>x</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputVal: state.todolist.inputVal,
    todoList: state.todolist.todoList
})

const mapDispatchToProps = {
    inputChange,
    addTodo,
    getTodos,
    toggleTodo,
    removeTodo,
    removeSelectedTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)