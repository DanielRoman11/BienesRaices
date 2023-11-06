import { Categoria, Precio, Propiedad } from "../models/index.js";

const propiedades = async(req, res) =>{
  try {
    const propiedades = await Propiedad.findAll({
      limit: 10, 
      include: [
        {model: Precio, as: 'precio'},
        {model: Categoria, as: 'categoria'}
      ],
    })
  
    res.status(200).json(propiedades)
  } catch (error) {
    console.error("Algo salio mal!", error);
    res.status(500).json({error: "Algo salio mal!"});
  }
}

export {
  propiedades,

}