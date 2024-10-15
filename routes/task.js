const express = require('express')
const { getAllTasksByChapter, getAllTasksByProject, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/task')
const userAuth = require('../middleware/auth')

const router = express.Router()

router.get('/get/p/:id', userAuth.checkUser, getAllTasksByProject)
router.get('/get/c/:id', userAuth.checkUser, getAllTasksByChapter)
router.get('/get/:id', userAuth.checkUser, getTaskById)
router.post('/add', userAuth.checkUser, createTask)
router.put('/upd/:id', userAuth.checkUser, updateTask)
router.delete('/del/:id', userAuth.checkUser, deleteTask)


module.exports = router