import express from "express";
import { body } from "express-validator"
import { admin, crear, guardar } from "../controllers/propiedades.Controller.js"

const ruta = express.Router();

ruta.get("/propiedades", admin);

ruta.get("/propiedades/crear", crear);
ruta.post("/propiedades/crear", 
  body('titulo').notEmpty().withMessage("El título no puede estar vacio"),
  body("descripcion").notEmpty().withMessage("Debes realizar una descripción de tu propiedad"),
  body("categoria").notEmpty().withMessage("Debes seleccionar una categoría"),
  body("precio").notEmpty().withMessage("Debes seleccionar un precio"),
  body("habitaciones").notEmpty().withMessage("Debes seleccionar la cantidad de habitaciones"),
  body("estacionamiento").notEmpty().withMessage("Debes seleccionar el cupo del estacionamiento"),
  body("wc").notEmpty().withMessage("Debes seleccionar la cantidad de baños"),
  body("lat").notEmpty().withMessage("Ubica la casa en el mapa"),
  guardar
);

export default ruta;