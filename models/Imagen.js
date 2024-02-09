import { DataTypes } from "sequelize"
import db from '../config/dbs.js'

const Imagen = db.define("imagenes", {
  ruta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  recurso: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
});

export default Imagen;