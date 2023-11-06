import { Categoria, Precio, Propiedad } from "../models/index.js";

const propiedades = async(req, res) =>{
  const propiedades = await Propiedad.findAll({
    limit: 10, 
    include: [
      {model: Precio, as: 'precio'},
      {model: Categoria, as: 'categoria'}
    ]
  })

  res.status(200).json(propiedades)
}

export {
  propiedades,

}