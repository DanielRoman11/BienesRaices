import express from "express";
import { body } from "express-validator"
<<<<<<< HEAD
import { admin, agregarImagen, almacenarImagen, crear, guardar } from "../controllers/propiedades.Controller.js"
=======
import { admin, agregarImagen, crear, editar, eliminar, guardar, guardarCambios,  mostrarPropiedad,  nuevaImagen,  publicarPropiedad, verImagen } from "../controllers/propiedades.Controller.js"
>>>>>>> 1a87c01cdaa6de02955d3462fe60f1ad495308e9
import protegerRuta from "../middleware/proteger.Routes.js";
import upload from "../middleware/subirArchivo.js";

const ruta = express.Router();

ruta.get("/propiedades", protegerRuta, admin);

ruta.get("/propiedades/crear", protegerRuta, crear);
ruta.post("/propiedades/crear", protegerRuta, 
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

ruta.get("/propiedades/agregar-imagen/:id",protegerRuta, agregarImagen);
ruta.post("/propiedades/agregar-imagen/:id", upload.single("imagen"), protegerRuta, publicarPropiedad);

<<<<<<< HEAD
ruta.post("/propiedades/agregar-imagen/:id", 
  upload.array("imagen", 3),
  protegerRuta,
  almacenarImagen
)
=======
ruta.get("/propiedades/editar/:id", protegerRuta, editar);
ruta.post("/propiedades/editar/:id", protegerRuta, 
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

ruta.get("/propiedades/editar-imagen/:id", protegerRuta, verImagen)
ruta.post("/propiedades/editar-imagen/:id", protegerRuta,  upload.single("imagen"),nuevaImagen);

ruta.post('/propiedades/eliminar/:id', protegerRuta, eliminar)

//! Área pública
ruta.get('/propiedad/:id', mostrarPropiedad)
>>>>>>> 1a87c01cdaa6de02955d3462fe60f1ad495308e9

export default ruta;