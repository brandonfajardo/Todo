const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo_list')

app.use(cors())
app.use(bodyParser.json())

const todoRoutes = require('./routes/todo')
app.get('/todo', todoRoutes.handleGetTodos)
app.post('/todo', todoRoutes.handleCreateTodo)
app.put('/todo', todoRoutes.handleUpdateTodo)

app.listen(3000, () => console.log('Server is running on port 3000'))
