import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inputChange } from '../actions' 

class TodoList extends Component {
    constructor(props){
        super(props)

        this.onInputChange = this.inputChange.bind(this)
    }

    inputChange(e){
        this.props.inputChange(e.target.value)
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
                <button>Add</button>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)