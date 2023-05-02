import express from "express";
import { body } from "express-validator"
import { admin, crear, guardar } from "../controllers/propiedades.Controller.js"

const ruta = express.Router();

ruta.get("/propiedades", admin);

ruta.get("/propiedades/crear", crear);
ruta.post("/propiedades/crear", 
  body('titulo').notEmpty().withMessage("El título no puede estar vacio"),
  body("descripcion").notEmpty().withMessage("Realiza una descripción de tu propiedad")
    .isLength({max: 165}).withMessage("La descripcion es muy larga"),
  body("categoria").isNumeric().withMessage("Selecciona una categoría"),
  body("precio").isNumeric().withMessage("Selecciona un precio"),
  body("habitaciones").isNumeric().withMessage("Selecciona la cantidad de habitaciones"),
  body("estacionamiento").isNumeric().withMessage("Selecciona el cupo del estacionamiento"),
  body("wc").isNumeric().withMessage("Selecciona la cantidad de baños"),
  body("lat").notEmpty().withMessage("Ubica la casa en el mapa"),
  guardar
);

export default ruta;