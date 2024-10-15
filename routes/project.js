const express = require('express')
const { getProject, getProjectById, createProject, updateProject, deleteProject } = require('../controllers/project')
const userAuth = require('../middleware/auth')

const router = express.Router()

router.get('/all', userAuth.checkUser, getProject)
router.get('/get/:id', userAuth.checkUser, getProjectById)
router.post('/add', userAuth.checkUser, createProject)
router.put('/upd/:id', userAuth.checkUser, updateProject)
router.delete('/del/:id', userAuth.checkUser, deleteProject)

module.exports = router