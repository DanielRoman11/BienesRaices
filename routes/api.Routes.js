import express from "express";
import { eliminarImagenes, propiedades } from "../controllers/api.Controller.js";

const router = express.Router();

router.get('/propiedades', propiedades)
router.delete('/propiedades', eliminarImagenes)

export default router;