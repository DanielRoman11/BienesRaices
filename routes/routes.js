import express from 'express';
import { comprobarPasswordToken, confirmar, formularioLogin, formularioOlvidePassword, formularioRegistro,  login,  nuevaPassword,  registroRespuesta, resetPassword } from "../controllers/usuarioController.js";

const router = express.Router();

router.get('/registro', formularioRegistro);
router.post('/registro', registroRespuesta);

router.get('/login', formularioLogin);
router.post('/login', login);

router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

router.get('/olvide-password/:token', comprobarPasswordToken);
router.post('/olvide-password/:token', nuevaPassword);

router.get('/confirmar/:token', confirmar);

export default router