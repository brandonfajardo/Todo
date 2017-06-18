import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inputChange, addTodo, getTodos } from '../actions' 

class TodoList extends Component {
    constructor(props){
        super(props)

        this.onInputChange = this.inputChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
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

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <input
                    type="text"
                    value={this.props.inputVal}
                    onChange={(e) => this.onInputChange(e)}
                />
                <button onClick={this.onAdd}>Add</button>
                <ul>
                    {this.props.todoList && this.props.todoList.map((todo) => {
                        return (
                            <li>
                                <input type="checkbox" checked={todo.completed}/>
                                {todo.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        inputVal: state.todolist.inputVal,
        todoList: state.todolist.todoList
    }
}

const mapDispatchToProps = {
    inputChange,
    addTodo,
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)