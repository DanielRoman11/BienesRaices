import express from 'express';
import { buscador, categoria, home, noEncontrado } from '../controllers/app.Controller.js';

const app = express.Router()

app.get('/', home);
app.get('/categoria/:id', categoria);
app.get('/404', noEncontrado);
app.get('/buscador', buscador);

export default app;
