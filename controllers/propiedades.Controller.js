import { check, validationResult } from "express-validator";
import { Categoria, Propiedad, Precio } from "../models/index.js" 

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
        wc,
        calle,
        lat,
        lng
      },
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
  }

  const {id: usuarioId} = req.usuario;

  try {
    const propiedad = await Propiedad.create({
      titulo,
      descripcion,
      habitaciones,
      estacionamiento,
      wc,
      calle,
      lat,
      lng,
      categoriaID: categoria,
      precioID: precio,
      usuarioID: usuarioId,
      imagen: ''
    });

    const { id } = propiedad;

    res.redirect(`/propiedades/agregar-imagen/${id}`);

  }catch (error) {
    console.error(error)
  } 
}

const agregarImagen = (req, res) => {
  res.render("propiedades/agregar-imagen", {
    pagina: "Crear propiedad",
    csrfToken: req.csrfToken()
  });
}

export {
  admin,
  crear,
  guardar,
  agregarImagen
}