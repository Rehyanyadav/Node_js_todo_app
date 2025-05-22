const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routes/user.routes');
const ToDoRoute = require('./routes/todo.router');
const app = express();
app.use(body_parser.json());

// Use correct variables
app.use("/", userRouter);
app.use("/", ToDoRoute);

module.exports = app;
