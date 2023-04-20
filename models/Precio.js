import { DataTypes } from "sequelize"
import db from '../config/dbs.js'

const Precio = db.define("precios", {
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});

export default Precio;