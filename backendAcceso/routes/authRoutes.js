const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const AuthMiddleware = require('../middware/authMiddware');
// Ruta para el registro de usuarios
router.post('/register', authController.register);
router.post('/login', authController.login);
// Ruta de prueba
router.get('/prueba',AuthMiddleware.verificarToken,authController.prueba);
module.exports = router;