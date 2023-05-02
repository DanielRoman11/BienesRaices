import express from "express";
<<<<<<< HEAD
import { body } from "express-validator"
import { admin, crear, guardar } from "../controllers/propiedades.Controller.js"
=======
import { admin, crear, generar } from "../controllers/propiedades.Controller.js"
>>>>>>> ea1a11d8e27bbf19e1e072e6fc54bd941b74a192

const ruta = express.Router();

ruta.get("/propiedades", admin);

ruta.get("/propiedades/crear", crear);
<<<<<<< HEAD
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
=======
ruta.post("/propiedades/crear", generar);
>>>>>>> ea1a11d8e27bbf19e1e072e6fc54bd941b74a192

export default ruta;