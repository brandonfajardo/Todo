const Todo = require('../models/todo')

exports.handleGetTodos = (req, res) => {
    Todo.find({})
        .then((todos) => res.send(todos))
}

exports.handleCreateTodo = (req, res) => {
    Todo.create({ text: req.body.text })
        .then(() => {
            Todo.find({})
                .then((todos) => res.send(todos))
        })
}