import express from 'express';
import { confirmar, formularioLogin, formularioOlvidePassword, formularioRegistro,  registroRespuesta, resetPassword } from "../controllers/usuarioController.js";

const router = express.Router();

router.get('/registro', formularioRegistro);
router.post('/registro', registroRespuesta);

router.get('/login', formularioLogin);

router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

router.get('/confirmar/:token', confirmar);

export default router