import express from 'express';
import { buscador, categoria, home, notEncontrado } from '../controllers/app.Controller.js';

const app = express.Router()

app.get('/', home);
app.get('/categorias/:id', categoria);
app.get('/404', notEncontrado);
app.get('/buscador', buscador);

export default app;