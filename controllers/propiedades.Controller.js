import { check, validationResult } from "express-validator";
import Categoria from "../models/Categoria.js"
import Propiedad from "../models/Propiedad.js"
import Precio from "../models/Precio.js"

const admin = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis propiedades",
    barra: true
  });
}

const crear = async(req, res) => {
  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ]);

  res.render("propiedades/crear", {
    pagina: "Ingresar una nueva propiedad",
    barra: true,
    categorias,
    precios,
    csrfToken: req.csrfToken()
  });
  
}

const generar = async(req, res) => {
  
  const [ categorias, precios ] = await Promise.all([
  Categoria.findAll(),
    Precio.findAll(),
  ]);

  await check("titulo").notEmpty().withMessage("El título no puede estar vacio").isLength({min: 5}).withMessage("Pon un título apropiado de por lo menos 5 caracteres").run(req);
  await check("descripcion").notEmpty().withMessage("Este campo no puede estar vacio").run(req);
  await check("categoria").notEmpty().withMessage("Selecciona una categoría valida").run(req);
  await check("precio").notEmpty().withMessage("Selecciona un rango de precio").run(req);
  await check("habitaciones").notEmpty().withMessage("Selecciona las habitaciones que correspondan").run(req);
  await check("estacionamiento").notEmpty().withMessage("Selecciona una capacidad de estacionamiento").run(req);
  await check("wc").notEmpty().withMessage("Seleccione la cantidad de baños de la propiedad").run(req);
  
  const errores = validationResult(req);

  const { 
    titulo, 
    descripcion, 
    habitaciones, 
    estacionamiento, 
    wc, 
    calle, 
    lat, 
    lng 
  } = req.body;

  if(!errores.isEmpty()){
    console.log(req.body.descripcion)

    return res.render("propiedades/crear", {
      pagina: "Ingresar una nueva propiedad",
      barra: true,
      categorias,
      precios,
      errores: errores.array(),
      titulo: titulo,
      descripcion: descripcion,
      csrfToken: req.csrfToken()
    });
  }

  const propiedadReg = await Propiedad.findOne({where: lat, where: lng})

  if(propiedadReg){
    if(!errores.isEmpty()){
      return res.render("propiedades/crear", {
        pagina: "Ingresar una nueva propiedad",
        barra: true,
        categorias,
        precios,
        errores: errores.array(),
        titulo,
        descripcion,
        csrfToken: req.csrfToken()
      });
    } 
  }
  
  const propiedad = await Propiedad.create({
    titulo: titulo,
    descripcion: descripcion,
    habitaciones: habitaciones,
    estacionamiento: estacionamiento,
    wc: wc,
    calle: calle,
    lat: lat,
    lng: lng,
    imagen: "",
    publicado: false
  });

  console.log(propiedad);
}

export {
  admin,
  crear,
  generar
}