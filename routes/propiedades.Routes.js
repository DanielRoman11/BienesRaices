import express from "express";
import { admin, crear, generar } from "../controllers/propiedades.Controller.js"

const ruta = express.Router();

ruta.get("/propiedades", admin);
ruta.get("/propiedades/crear", crear);
ruta.post("/propiedades/crear", generar);

export default ruta;