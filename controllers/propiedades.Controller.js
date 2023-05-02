import Categoria from "../models/Categoria.js"
import Precio from "../models/Precio.js"
import Propiedad from "../models/Propiedad.js"
import { validationResult } from "express-validator"

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

const guardar = async(req, res) => {
  const errores = validationResult(req)
  
  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ]);

  const { titulo, categoria, precio, habitaciones, estacionamientos, wc, lat, lng } = req.body

  if(!errores.isEmpty()){
    return res.render("propiedades/crear", {
      pagina: "Ingresar una nueva propiedad",
      barra: true,
      categorias,
      precios,
      propiedad: {
        titulo,
        categoria,
        precio,
        habitaciones,
        estacionamientos,
        wc,
        lat,
        lng,
        

      },
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
  }

  const propiedad = await Propiedad.create({

  });
}

export {
  admin,
  crear,
  guardar
}