import { validationResult } from "express-validator";
import { Categoria, Propiedad, Precio, Mensaje, Imagen, Usuario } from "../models/index.js" 
import { esVendedor } from "../helpers/esVendedor.js";
import cloudinary from "../config/cloudinary.js";
import { Sequelize } from "sequelize";

const admin = async(req, res) => {
  const { pagina: paginaActual } = req.query;
  const { id } = req.usuario
  
  // console.log(paginaActual);

  const expReg = /^(?!0)\d+$/g; //? Regex para comprobar que sean números 

  if(!expReg.test(paginaActual)){
    return res.redirect('/propiedades?pagina=1')
  }

  try {
    const limit = 12
    const offset = ((paginaActual * limit) - limit)

    const [ propiedades, total ] = await Promise.all([
      Propiedad.findAll({
        limit,
        offset,
        where: { usuarioID: id },
        include: [
          { model: Imagen, as: 'imagenes'},
          { model: Categoria, as: 'categoria' },
          { model: Precio, as: 'precio' },
          { model: Mensaje, as: 'mensajes'}
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
      propiedades,
      paginaActual: Number(paginaActual),
      paginas: Math.ceil(total / limit),
      offset,
      limit,
      total,
      usuario: req.usuario
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
    usuario: req.usuario
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
      usuario: req.usuario
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
    usuario: req.usuario
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

  if(!req.files.length > 0){
    return res.render("propiedades/agregar-imagen", {
    pagina: `Agregar Imagen para "${propiedad.titulo}"`,
    propiedad,
    errores: [{ msg: "No se ha cargado una imagen" }],
    usuario: req.usuario
  });
  }

  const imagesArr = await Promise.allSettled(req.files.map(file => {
    return cloudinary.uploader.upload(file.path, {
        folder: 'bienesraices/',
        resource_type: 'image',
        public_id: file.filename.slice(0, file.filename.length - 4)
    });
  }));
  
  //? Manejo de errores
  let uploadPromises = imagesArr.map(async(result, index) => {
    if (result.status === 'rejected') {
      console.error(`Error al subir el archivo ${req.files[index].filename}: ${result.reason}`);
    } else {
      await Imagen.create({
        ruta: result.value.secure_url,
        recurso: result.value.public_id,
        propiedadID: propiedad.id,
      })

      console.log(`Archivo ${req.files[index].filename} subido correctamente: ${result.value.secure_url}`);
    }
  });
  
  await Promise.all(uploadPromises);

  propiedad.publicado = true;
  await propiedad.save();

  res.redirect('/propiedades')
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
    pagina: `Editando "${propiedad.titulo}"`,
    propiedad,
    categorias,
    precios,
    usuario: req.usuario
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
      usuario: req.usuario
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

  const propiedad = await Propiedad.findByPk(id,{
    include: [
      { model: Imagen, as: 'imagenes'}
    ]
  });

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades");
  }

  res.render("propiedades/editar-imagen",{
    pagina: `Editar Imagen para "${propiedad.titulo}"`,
    propiedad,
    usuario: req.usuario
    // // // csrfToken: req.csrfToken()
    }
  );
}

const nuevaImagen = async(req, res) => {
  const { id } = req.params
  const propiedad = await Propiedad.findByPk(id,{
    include: [
      { model: Imagen, as: 'imagenes'}
    ]
  });

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades")
  }

  if(!req.files.length > 0){
    return res.render("propiedades/editar-imagen",{
      pagina: `Editar Imagen para "${propiedad.titulo}"`,
      propiedad,
      errores: [{ msg: "No se ha cargado una imagen" }],
      usuario: req.usuario
    }
    );
  }

  const imagenesPropiedad = await Imagen.findAll({
    where: {
      propiedadID: propiedad.id
    }
  });

  console.log(imagenesPropiedad);
  console.log(imagenesPropiedad.length);
  
  if(imagenesPropiedad.length > 0){
    const imageBeforeArr = new Array();

    imagenesPropiedad.forEach(imagen =>{
      imageBeforeArr.push(imagen.recurso);
    })

    await cloudinary.api.delete_resources(imageBeforeArr, {
      type: 'upload', resource_type: 'image'
    })
      .then(()=>{
        console.log("Se reemplazaran las imágenes de: ", propiedad.id );
      })
      .catch(error=>{
        console.error("Algo salío mal al intentar eliminar las imágenes de: ", propiedad.id, error);
      })
  }

  const actions = await Promise.all([
    Imagen.destroy({
      where: {
        propiedadID: propiedad.id
      }
    }),
    req.files.map(file => {
      return cloudinary.uploader.upload(file.path, {
          folder: 'bienesraices/',
          resource_type: 'image',
          public_id: file.filename.slice(0, file.filename.length - 4)
      });
    })
  ])

  let uploadPromises = actions[1].map(async(result, index) => {
    console.log(await result);
    if (result.status === 'rejected') {
        console.error(`Error al subir el archivo ${req.files[index].filename}: ${result.reason}`);
    } 
    else {
      const { secure_url, public_id } = await result;

      await Imagen.create({
        ruta: secure_url,
        recurso: public_id,
        propiedadID: propiedad.id,
      })
      
      console.log(`Archivo ${req.files[index].filename} subido correctamente: ${secure_url}`);
    }
  });

  await Promise.all(uploadPromises);

  propiedad.publicado = true;
  await propiedad.save();

  res.redirect('/propiedades');

}

const eliminar = async(req, res) => {
  const { id } = req.params
  const propiedad = await Propiedad.findByPk(id);

  if(!propiedad){
    return res.redirect("/propiedades");
  }

  if(propiedad.usuarioID.toString() !== req.usuario.id.toString()){
    return res.redirect("/propiedades")
  }

  const imagenesPropiedad = await Imagen.findAll({
    where: {
      propiedadID: propiedad.id
    }
  });

  // console.log(imagenesPropiedad);
  
  if(imagenesPropiedad.length > 0){
    const imageBeforeArr = new Array();

    imagenesPropiedad.forEach(imagen => {
      imageBeforeArr.push(imagen.recurso);
    })

    await cloudinary.api.delete_resources(imageBeforeArr, {
      type: 'upload', resource_type: 'image'
    })
      .then(()=>{
        console.log("Se reemplazaran las imágenes de: ", propiedad.id );
      })
      .catch(error=>{
        console.error("Algo salío mal al intentar eliminar las imágenes de: ", propiedad.id, error);
      })
    
  }

  await Promise.all([
    Imagen.destroy({
      where: {
        propiedadID: propiedad.id
      }
    }),
    propiedad.destroy()
  ])
  .then(()=>{
    console.log("Propiedad eliminada correctamente!");
    res.redirect('/propiedades');
  })
  .catch(error =>{
    console.error("Algo salió mal al eliminar la propiedad ", error);
  })

}

const mostrarPropiedad = async(req, res) => {
  const { id } = req.params;
  const propiedad = await Propiedad.findByPk(id, {
    include: [
      { model: Categoria, as: 'categoria' },
      { model: Precio, as: 'precio' },
      { model: Imagen, as: 'imagenes' }
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
      { model: Precio, as: 'precio' },
      { model: Imagen, as: 'imagenes' },
      { model: Mensaje, as: 'mensajes'}
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

  // console.log(req.body);
  // console.log(req.params);
  // console.log(req.usuario);

  await Mensaje.create({
    mensaje,
    usuarioID: req.usuario.id,
    propiedadID: propiedad.id
  });


  res.render('templates/mensaje', {
    pagina: "Confirmación de mensaje",
    mensaje: "Tu mensaje se ha enviado correctamente ✅",
    usuario: req.usuario
  })
}

const mensajes = async(req, res) =>{
  const { id } = req.params;
  const lenguajeUsuario = req.headers['accept-language'];

  const idiomas = lenguajeUsuario
    ? lenguajeUsuario.split(',').map((idioma) => idioma.trim().split(';')[0])
    : ['es']; // Valor predeterminado en caso de que no haya encabezado Accept-Language

  // El primer idioma de la lista es el preferido
  const idiomaPreferido = idiomas[0];

  const propiedad = await Propiedad.findByPk(id,{
    include: [
      { model: Mensaje, as: 'mensajes',
        include: [
          { model: Usuario, required: false, where: {usuarioID: Sequelize.col('mensajes.usuarioID')},
            order: ['createdAt', 'DESC']
          }
        ]
      }
    ]
  })

  res.render('propiedades/mensajes', {
    pagina: "Ver mensajes",
    idioma: idiomaPreferido,
    propiedad,
    usuario: req.usuario
  });

}

const explorar = async(req, res) => {
  const { pagina: paginaActual } = req.query;

  const expReg = /^(?!0)\d+$/g; //? Regex para comprobar que sean números 

  if(!expReg.test(paginaActual)){
    return res.redirect('/propiedades/explorar?pagina=1')
  }

  const limit = 12
  const offset = ((paginaActual * limit) - limit)

  const [ propiedades, total ] = await Promise.all([
    Propiedad.findAll({
      limit,
      offset,
      include: [
        { model: Imagen, as: 'imagenes'},
        { model: Precio, as: 'precio' },
      ],
      order: [
        ['updatedAt', 'DESC']
      ]
    }),
    Propiedad.count(),
  ]);

  res.render('propiedades/explorar', {
    pagina: "Todas las propiedadaes",
    propiedades,
    paginaActual: Number(paginaActual),
    paginas: Math.ceil(total / limit),
    offset,
    limit,
    total,
    usuario: req.usuario
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
  enviarMensaje,
  mensajes,
  explorar
}
