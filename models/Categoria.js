import { DataTypes } from "sequelize"
import db from '../config/dbs.js'

const Categoria = db.define("categorias", {
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
});

export default Categoria;