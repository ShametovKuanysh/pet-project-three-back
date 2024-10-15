const express = require('express')
const { getChapterById, getChaptersByProject, createChapter, updateChapter, deleteChapter } = require('../controllers/chapter')
const userAuth = require('../middleware/auth')

const router = express.Router()

router.get('/get/all/:id', userAuth.checkUser, getChaptersByProject)
router.get('/get/:id', userAuth.checkUser, getChapterById)
router.post('/add', userAuth.checkUser, createChapter)
router.put('/upd/:id', userAuth.checkUser, updateChapter)
router.delete('/del/:id', userAuth.checkUser, deleteChapter)

module.exports = router