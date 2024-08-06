const express = require('express')
const { loginUser, registerUser, getMe } = require('../controllers/userController')
const protect = require('../middleware/auth')

const router = express.Router()


router.post('/login', loginUser)

router.post('/register',registerUser)

router.get('/me', protect ,getMe)

module.exports = router