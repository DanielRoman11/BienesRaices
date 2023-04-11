import express from "express";
import { admin, crear } from "../controllers/propiedades.Controller.js"

const ruta = express.Router();

ruta.get("/propiedades", admin);
ruta.get("/propiedades/crear", crear);

export default ruta;