import express from 'express';
import { buscador, categoria, home, noEncontrado } from '../controllers/app.Controller.js';
import { identificarUsuario } from '../middleware/indentificarUsuario.js';

const route = express.Router()

route.get('/', home);
route.get('/categoria/:id', categoria);
route.get('/404', noEncontrado);
route.post('/buscador', buscador);

export default route;
