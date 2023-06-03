import { DataTypes } from "sequelize"
import db from '../config/dbs.js'

const Imagen = db.define("imagenes", {
  ruta: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Imagen