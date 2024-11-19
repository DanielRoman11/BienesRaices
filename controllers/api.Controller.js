import { Categoria, Imagen, Precio, Propiedad, Usuario } from "../models/index.js";
import cloudinary from "../config/cloudinary.js";

const propiedades = async(req, res) =>{
  try {
    const propiedades = await Propiedad.findAll({
      where: {
        publicado: 1
      },
      include: [
        { model: Precio, as: 'precio'},
        { model: Categoria, as: 'categoria'},
        { model: Usuario, as: 'usuario'},
        { model: Imagen, as: 'imagenes'}
      ],
    })

    res.status(200).json(propiedades)
  } catch (error) {
    console.error("Algo salio mal!", error);
    res.status(500).json({message: "Algo salió mal! ", error});
  }
}

const eliminarImagenes = async(req, res) =>{
  await cloudinary.api.delete_resources_by_prefix('bienesraices/')
  .then(result =>{
    console.log(result);
    res.json(result)
  })
  .catch(error => {
    console.error(error);
  })
}

export {
  propiedades,
  eliminarImagenes
}