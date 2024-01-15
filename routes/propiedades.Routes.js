import express from "express";
import { body } from "express-validator"
import { admin, agregarImagen, crear, editar, eliminar, guardar, guardarCambios,  mostrarPropiedad,  nuevaImagen,  publicarPropiedad, verImagen } from "../controllers/propiedades.Controller.js"
import protegerRuta from "../middleware/proteger.Routes.js";
import upload from "../middleware/subirArchivo.js";

const ruta = express.Router();

ruta.get("/", protegerRuta, admin);

ruta.get("/crear", protegerRuta, crear);
ruta.post("/crear", protegerRuta, 
  body('titulo').notEmpty().withMessage("El título no puede estar vacio").isLength({max: 72}).withMessage("El título es demasiado grande"),
  body("descripcion").notEmpty().withMessage("Realiza una descripción de tu propiedad")
    .isLength({max: 400}).withMessage("La descripcion es muy larga"),
  body("categoria").isNumeric().withMessage("Selecciona una categoría"),
  body("precio").isNumeric().withMessage("Selecciona un precio"),
  body("habitaciones").isNumeric().withMessage("Selecciona la cantidad de habitaciones"),
  body("estacionamiento").isNumeric().withMessage("Selecciona el cupo del estacionamiento"),
  body("wc").isNumeric().withMessage("Selecciona la cantidad de baños"),
  body("lat").notEmpty().withMessage("Ubica la casa en el mapa"),
  guardar
);

ruta.get("/agregar-imagen/:id",protegerRuta, agregarImagen);
ruta.post("/agregar-imagen/:id", upload.single("imagen"), protegerRuta, publicarPropiedad);

ruta.get("/editar/:id", protegerRuta, editar);
ruta.post("/editar/:id", protegerRuta, 
  body('titulo').notEmpty().withMessage("El título no puede estar vacio").isLength({max: 72}).withMessage("El título es demasiado grande"),
  body("descripcion").notEmpty().withMessage("Realiza una descripción de tu propiedad").isLength({max: 400}).withMessage("La descripcion es muy larga"),
  body("categoria").isNumeric().withMessage("Selecciona una categoría"),
  body("precio").isNumeric().withMessage("Selecciona un precio"),
  body("habitaciones").isNumeric().withMessage("Selecciona la cantidad de habitaciones"),
  body("estacionamiento").isNumeric().withMessage("Selecciona el cupo del estacionamiento"),
  body("wc").isNumeric().withMessage("Selecciona la cantidad de baños"),
  body("lat").notEmpty().withMessage("Ubica la casa en el mapa"),
  guardarCambios
);

ruta.get("/editar-imagen/:id", protegerRuta, verImagen)
ruta.post("/editar-imagen/:id", protegerRuta, upload.single("imagen"), nuevaImagen);

ruta.post('/eliminar/:id', protegerRuta, eliminar)

//! Área pública
ruta.get('/propiedad/:id', mostrarPropiedad)

export default ruta;