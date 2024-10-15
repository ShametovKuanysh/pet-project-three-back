const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(`postgres://me:9876543210m@localhost:5432/todolist`, {dialect: "postgres"})

sequelize.authenticate().then(() => {
    console.log('Authentication successful')
}).catch((err) => {
    console.log(err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel') (sequelize, DataTypes)
db.projects = require('./projectModel') (sequelize, DataTypes)
db.chapters = require('./chapterModel') (sequelize, DataTypes)
db.tasks = require('./taskModel') (sequelize, DataTypes)

module.exports = db