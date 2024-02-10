import { Sequelize } from "sequelize";
import { Categoria, Imagen, Precio, Propiedad, Usuario } from "../models/index.js";

const propiedades = async(req, res) =>{
  try {
    const propiedades = await Propiedad.findAll({
      limit: 10, 
      include: [
        { model: Precio, as: 'precio'},
        { model: Categoria, as: 'categoria'},
        { model: Usuario, as: 'usuario'},
        { model: Imagen, required: false, where: {propiedadID: Sequelize.col('propiedades.id') }}
      ],
    })
  
    res.status(200).json(propiedades)
  } catch (error) {
    console.error("Algo salio mal!", error);
    res.status(500).json({message: "Algo salió mal! ", error});
  }
}

export {
  propiedades,

}