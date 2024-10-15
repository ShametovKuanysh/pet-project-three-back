const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const sequelize = require('sequelize');
const db = require('./models')
const dotenv = require('dotenv').config()

const users = require('./routes/users');
const projects = require('./routes/project');
const chapters = require('./routes/chapter');
const tasks = require('./routes/task');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Database connected successfully');
// })


app.use('/users', users);
app.use('/projects', projects);
app.use('/chapters', chapters);
app.use('/tasks', tasks);
// app.use('/todolists', todolists);
// app.use('/todos', todos);

app.listen(port, ()=>{
    console.log('Server is running on port 3000');
})