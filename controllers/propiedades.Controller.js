import { check, validationResult } from "express-validator";
import Categoria from "../models/Categoria.js"
import Precio from "../models/Precio.js"
import Propiedad from "../models/Propiedad.js"

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
    pagina: "Crear propiedad",
    barra: true,
    categorias,
    precios,
    csrfToken: req.csrfToken()
  });
  
}

const guardar = async(req, res) => {
  const errores = validationResult(req)
  
  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ]);

  const { titulo, descripcion, categoria, precio, habitaciones, estacionamiento, wc, lat, lng, calle } = req.body

  if(!errores.isEmpty()){
    return res.render("propiedades/crear", {
      pagina: "Crear propiedad",
      barra: true,
      categorias,
      precios,
      propiedad: {
        titulo,
        descripcion,
        categoria,
        precio,
        habitaciones,
        estacionamiento,
        wc
      },
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
  }

  const propiedadReg = await Propiedad.findOne({where: lat, where: lng})

  if(propiedadReg){
    return res.render("propiedades/crear", {
      pagina: "Crear propiedad",
      barra: true,
      propiedad:{
        titulo,
        descripcion,
        categoria,
        precio,
        habitaciones,
        estacionamiento,
        wc
      },
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
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
}

export {
  admin,
  crear,
  guardar
}