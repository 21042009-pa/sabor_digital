const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

// Rota para cadastrar um novo usuário (Pode ser aberta ou bloqueada no futuro)
router.post('/registrar', UsuarioController.registrar);

// Rota de Login (Recebe email e senha, devolve o token)
router.post('/login', UsuarioController.login);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 23c4337758cdc70c6c29ea89f6c584458c42688c
