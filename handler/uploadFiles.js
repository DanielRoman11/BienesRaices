import { MulterError } from "multer";
import { subirImagen } from "../middleware/subirImagenes.js";
import { Imagen, Propiedad } from "../models/index.js"

const errores = {
  field: "El formato del archivo no coincide con el esperado (jpg, png, jpeg)",
  size: "El archivo excede el tamaño esperado",
  unexpected: "Algo salió mal, revisa que hayas subido solo imágenes y que sean solo 5 imágenes"
}

export const handleUpdatingImages = (req, res, next) =>{
  subirImagen.array("images", 5)(req, res, async (err) =>{
    const { id } = req.params
    const propiedad = await Propiedad.findByPk(id,{
      include: [
        { model: Imagen, as: 'imagenes'}
      ]
    });

    if (err instanceof MulterError) {
      console.log(MulterError);
      if (err.code === 'LIMIT_FILE_SIZE') return res.render("propiedades/editar-imagen",{
        pagina: `Editar Imagen para "${propiedad.titulo}"`,
        propiedad,
        errores: [{ msg: errores.size }],
        usuario: req.usuario
      });
      if (err.code === 'LIMIT_UNEXPECTED_FILE') return res.render("propiedades/editar-imagen",{
        pagina: `Editar Imagen para "${propiedad.titulo}"`,
        propiedad,
        errores: [{ msg: errores.unexpected }],
        usuario: req.usuario
      });
      if (err.code === 'LIMIT_FIELD_KEY') return res.render("propiedades/editar-imagen",{
        pagina: `Editar Imagen para "${propiedad.titulo}"`,
        propiedad,
        errores: [{ msg: errores.field }],
        usuario: req.usuario
      });      
    }
    next();
  })
}

export const handleUploadingImages = (req, res, next) =>{
  console.log(MulterError);
  subirImagen.array("images", 5)(req, res, async (err) =>{
    const { id } = req.params
    const propiedad = await Propiedad.findByPk(id,{
      include: [
        { model: Imagen, as: 'imagenes'}
      ]
    });

    if (err instanceof MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') return res.render("propiedades/agregar-imagen", {
        pagina: `Agregar Imagen para "${propiedad.titulo}"`,
        propiedad,
        errores: [{ msg: errores.size }],
        usuario: req.usuario
      });
      // handle unexpected file error
      if (err.code === 'LIMIT_UNEXPECTED_FILE') return res.render("propiedades/agregar-imagen", {
        pagina: `Agregar Imagen para "${propiedad.titulo}"`,
        propiedad,
        errores: [{ msg: errores.unexpected }],
        usuario: req.usuario
      });
      // handle unexpected field key error
      if (err.code === 'LIMIT_FIELD_KEY') return res.render("propiedades/agregar-imagen", {
        pagina: `Agregar Imagen para "${propiedad.titulo}"`,
        propiedad,
        errores: [{ msg: errores.field }],
        usuario: req.usuario
      });
    }
   
    next();
  })
}