const express = require('express');
const router = express.Router();
const controller = require('./user_controller')

//해당폴더의 하위 URL을 관리하는 파일.
// join login info
router.get('/join',controller.join) // http://localhost:3000/user/join
router.get('/login',controller.login) 
router.get('/info',controller.info) 
router.get('/logout',controller.logout)
router.post('/join_success',controller.join_success)
router.post('/login_check',controller.login_check)

module.exports = router;