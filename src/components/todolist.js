import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inputChange, addTodo } from '../actions' 

class TodoList extends Component {
    constructor(props){
        super(props)

        this.onInputChange = this.inputChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
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
                <ul />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputVal: state.todolist.inputVal
})

const mapDispatchToProps = {
    inputChange,
    addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)