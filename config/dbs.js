import Sequelize from "sequelize";
<<<<<<< HEAD
=======
import { manejarDesconexion } from "../helpers/manejaDesconexion.js";
>>>>>>> 342cd8aeea26125a03d5308fb187752e26e64c44

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  dialect: 'mysql',
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000
  },
<<<<<<< HEAD
  operatorAliases: false,
  dialectOptions: {
    timeout: 30000
  }
});
=======
  operatorAliases: false
});  

manejarDesconexion(db)
>>>>>>> 342cd8aeea26125a03d5308fb187752e26e64c44

export default db;