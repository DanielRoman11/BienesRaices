import express from 'express';
import { comprobarToken, confirmar, formularioLogin, formularioOlvidePassword, formularioRegistro, nuevoPassword, registroRespuesta, resetPassword } from "../controllers/usuarioController.js";

const router = express.Router();

router.get('/registro', formularioRegistro);
router.post('/registro', registroRespuesta);

router.get('/login', formularioLogin);

router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

router.get('/confirmar/:token', confirmar);

// Almacena el nuevo password
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);


export default router