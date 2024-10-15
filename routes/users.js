const pool = require('../db')
const express = require('express')
const { signup, login} = require('../controllers/user')
const userAuth = require('../middleware/auth')

const router = express.Router()

router.post('/signup', userAuth.saveUser, signup)
router.post('/login', login)

// router.get('/', async (req, res) => {
//     try {
//         const results = await pool.query('SELECT * FROM users ORDER BY id ASC')
//         res.status(200).json(results.rows)
//     } catch (err){
//         console.log(error);
//     }
    
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const results = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id])
//         res.status(200).json(results.rows)
//     } catch (err){
//         console.log(error);
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         const { name, email } = req.body
//         const results = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email])
//         res.status(201).json(results.rows[0])
//     } catch (err){
//         console.log(error);
//     }
// })

// router.put('/:id', async (req, res) => {
//     try {
//         const { name, email } = req.body
//         const results = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, req.params.id])
//         res.status(200).json(results.rows[0])
//     } catch (err){
//         console.log(error);
//     }
// })

// router.delete('/:id', async (req, res) => {
//     try {
//         const results = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id])
//         res.status(200).json({ message: 'User deleted successfully' })
//     } catch (err){
//         console.log(error);
//     }
// })

module.exports = router