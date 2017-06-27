const Todo = require('../models/todo')

exports.handleGetTodos = (req, res) => {
    Todo.find({})
        .then((todos) => res.send(todos))
}

exports.handleCreateTodo = (req, res) => {
    Todo.create({ text: req.body.text })
        .then((todo) => {
            res.send(todo)
        })
}

exports.handleUpdateTodo = (req, res) => {
    Todo.findById({_id: req.body.id})
        .then((todo) => {
            if (req.body.type == 'updateCompletedVal'){
                todo.completed = !todo.completed
                todo.save()
                res.send(todo)
            } else if (req.body.type == 'updateTodoText'){
                todo.text = req.body.text
                todo.save()
                res.send(todo)
            }
        })
}

exports.handleDeleteTodo = (req, res) => {
    Todo.findById({_id: req.body.id})
        .then((todo) => {
            todo.remove()
            todo.save()
            res.send(todo)
        })
}

exports.handleDeleteSelectedTodos = (req, res) => {
    Todo.find({})
        .then((todos) => {
            let updatedTodos = todos.filter((todo) => {
                if (todo.completed){
                    todo.remove()
                    return false
                }
                return todo
            })
            res.send(updatedTodos)
        })
}