const express = require('express')
const app = express()

const todoRoutes = require('./routes/todo')
app.post('/todo', todoRoutes.handleCreateTodo)

app.listen(3000, () => console.log('Server is running on port 3000'))
