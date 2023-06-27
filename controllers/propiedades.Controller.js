import { Sequelize } from "sequelize";
import { check, validationResult } from "express-validator";
import { Categoria, Propiedad, Precio } from "../models/index.js" 

const admin = async(req, res) => {
  const { id } = req.usuario

  const propiedades = await Propiedad.findAll({where: { usuarioID: id },
    include: [
      { model: Categoria, as: 'categoria' },
      { model: Precio, as: 'precio' }
    ]
  });
  
  res.render("propiedades/admin", {
    pagina: "Mis propiedades",
    barra: true,
    propiedades: propiedades
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

const agregarImagen = async(req, res) => {
  
  const { id } = req.params
  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.publicado){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades")
  }
  
  res.render("propiedades/agregar-imagen", {
    pagina: `Agregar Imagen para "${propiedad.titulo}"`,
    propiedad,
    csrfToken: req.csrfToken()
  });
}

const publicarPropiedad = async(req, res, next) => {
  const { id } = req.params
  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.publicado){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades")
  }

  const imagen = req.file;
  console.log(imagen);

  //TODO: Subir la ruta del archivo en la database
  propiedad.imagen = imagen.filename;
  propiedad.publicado = true;
  await propiedad.save()

  next();
}

const editar = async(req, res) => {
  const { id } = req.params;

  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades");
  }

  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll()
  ]);

  res.render("propiedades/editar", {
    pagina: "Editar propiedad",
    propiedad,
    categorias,
    precios,
    csrfToken: req.csrfToken()
  })
}

const guardarCambios = async(req, res) => {
  const errores = validationResult(req);

  const { titulo, descripcion, categoria, precio, habitaciones, estacionamiento, wc, lat, lng, calle 
  } = req.body
  
  if(!errores.isEmpty()){
    const [ categorias, precios ] = await Promise.all([
      Categoria.findAll(),
      Precio.findAll()
    ]);

    return res.render("propiedades/editar", {
      pagina: "Editar propiedad",
      propiedad: {
        titulo, 
        descripcion, categoriaID: categoria, 
        precioID: precio, 
        habitaciones, 
        estacionamiento, 
        wc, lat, 
        lng, 
        calle        
      },
      categorias,
      precios,
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
  }

  const { id } = req.params;
  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad) return res.redirect("/propiedades");

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()) return res.redirect("/propiedades");

  res.render("propiedades/editar-imagen", {
    pagina: "Editar propiedad",
    csrfToken: req.csrfToken()
  });
}

export {
  admin,
  crear,
  guardar,
  agregarImagen,
  publicarPropiedad,
  editar,
  guardarCambios
}