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
            todo.completed = !todo.completed
            todo.save()
            res.send(todo)
        })
}