import { unlink } from "node:fs/promises";
import { validationResult } from "express-validator";
import { Categoria, Propiedad, Precio, Mensaje } from "../models/index.js" 
import eliminarArchivo from "../helpers/eliminarImagen.js";
import { esVendedor } from "../helpers/esVendedor.js";

const admin = async(req, res) => {
  const { pagina: paginaActual } = req.query;
  const { id } = req.usuario
  
  console.log(paginaActual);

  const expReg = /^(?!0)\d+$/g; //? Regex para comprobar que sean números 

  if(!expReg.test(paginaActual)){
    return res.redirect('/propiedades?pagina=1')
  }

  try {

    const limit = 6
    const offset = ((paginaActual * limit) - limit)

    const [ propiedades, total ] = await Promise.all([
      Propiedad.findAll({
        limit,
        offset,
        where: { usuarioID: id },
        include: [
          { model: Categoria, as: 'categoria' },
          { model: Precio, as: 'precio' }
        ],
        order: [
          ['updatedAt', 'DESC']
        ]
      }),
      Propiedad.count({
        where: {
          usuarioID : id
        }
      }),
    ]);
    

    res.render("propiedades/admin", {
      pagina: "Mis propiedades",
      barra: true,
      propiedades: propiedades,
      paginaActual: Number(paginaActual),
      paginas:Math.ceil(total / limit),
      offset,
      limit,
      total,
      // // // csrfToken: req.csrfToken()
    }); 
  } catch (error) {
    console.error(error);
  }
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
    // // // csrfToken: req.csrfToken()
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
      // // // csrfToken: req.csrfToken()
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
  const { id } = req.params;
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
    // // // csrfToken: req.csrfToken()
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
    pagina: `Editar propiedad: ${propiedad.titulo}`,
    propiedad,
    categorias,
    precios,
    // // csrfToken: req.csrfToken()
  })
}

const guardarCambios = async(req, res) => {
  const errores = validationResult(req);

  const { titulo, descripcion, categoria: categoriaID, precio: precioID, habitaciones, estacionamiento, wc, lat, lng, calle 
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
        descripcion, categoriaID, 
        precioID, 
        habitaciones, 
        estacionamiento, 
        wc, lat, 
        lng, 
        calle        
      },
      categorias,
      precios,
      errores: errores.array(),
      // // // csrfToken: req.csrfToken()
    });
  }

  const { id } = req.params;
  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad) return res.redirect("/propiedades");

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()) return res.redirect("/propiedades");

  try {
    propiedad.set({
      titulo,
      precioID,
      categoriaID,
      descripcion,
      habitaciones,
      estacionamiento,
      wc,
      calle,
      lat,
      lng,
    });
    await propiedad.save();

    res.redirect(`/propiedades/editar-imagen/${id}`);
  } catch (error) {
    console.error(error);
  }
}

const verImagen = async(req, res) => {
  const { id } = req.params;

  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades");
  }

  res.render("propiedades/editar-imagen",{
    propiedad,
    // // // csrfToken: req.csrfToken()
    }
  );
}

const nuevaImagen = async(req, res) => {
  try {
    // console.log("Cargando...");
    const { id } = req.params
    const propiedad = await Propiedad.findByPk(id);
  
    if(!propiedad){
      return res.redirect("/propiedad");
    }
  
    if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
      return res.redirect("/propiedad")
    }
    
    
    const imagen = req.file;
    // console.log(imagen);
    
    //* Eliminar Imagen
    const rutaCarpeta = "public/uploads/"
    const rutaArchivo = rutaCarpeta + propiedad.imagen;

    eliminarArchivo(rutaArchivo);
  
    //TODO: Subir la ruta del archivo en la database
    propiedad.imagen = imagen.filename;
    propiedad.publicado = true;
    await propiedad.save()

    console.log(propiedad.imagen);
    res.redirect("/propiedades")
  } catch (error) {
   console.error(error); 
  }
}

const eliminar = async(req, res) => {
  const { id } = req.params
  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(!propiedad.publicado){
    if(propiedad.imagen === ''){
      await propiedad.destroy()
      return res.redirect("/propiedades");
    }
    await unlink(`public/uploads/${propiedad.imagen}`);
    console.log(`Imagen eliminada para: ${propiedad.titulo}, imagen: ${propiedad.imagen}`);
  
    await propiedad.destroy();

    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades")
  }

  //? Eliminando imagen
  if(propiedad.imagen === ''){
    return await propiedad.destroy()
  }

  await unlink(`public/uploads/${propiedad.imagen}`);
  console.log(`Imagen eliminada para: ${propiedad.titulo}, imagen: ${propiedad.imagen} `);

  await propiedad.destroy();
  res.redirect("/propiedades");
}

const mostrarPropiedad = async(req, res) => {
  const { id } = req.params;
  const propiedad = await Propiedad.findByPk(id, {
    include: [
      { model: Categoria, as: 'categoria' },
      { model: Precio, as: 'precio' }
    ]
  });
  
  if(!propiedad) res.redirect("/404");

  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll()
  ])

  console.log(esVendedor(req.usuario?.id, propiedad.usuarioID));

  res.render("propiedades/ver", {
    pagina: propiedad.titulo,
    propiedad,
    categorias,
    precios,
    usuario: req.usuario,
    esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioID)
  });
}

const enviarMensaje = async(req, res) =>{
  const { id } = req.params;
  const { mensaje } = req.body;

  const propiedad = await Propiedad.findByPk(id, {
    include: [
      { model: Categoria, as: 'categoria' },
      { model: Precio, as: 'precio' }
    ]
  });
  
  if(!propiedad) res.redirect("/404");

  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll()
  ])

  console.log(esVendedor(req.usuario?.id, propiedad.usuarioID));

  const errores = validationResult(req);
  
  if(!errores.isEmpty()){
    console.log(errores.array());
    return res.render("propiedades/ver", {
      pagina: propiedad.titulo,
      propiedad,
      categorias,
      precios,
      usuario: req.usuario,
      esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioID),
      errores: errores.array()
    })
  }

  await Mensaje.create({
    mensaje,
    usuarioID: req.usuario.id,
    propiedadID: propiedad.id
  })

  res.render('propiedades/ver', {
    propiedad,
    pagina: propiedad.titulo,
    usuario: req.usuario,
    esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioID)
  })
}


export {
  admin,
  crear,
  guardar,
  agregarImagen,
  publicarPropiedad,
  editar,
  guardarCambios,
  eliminar,
  verImagen,
  nuevaImagen,
  mostrarPropiedad,
  enviarMensaje
}
