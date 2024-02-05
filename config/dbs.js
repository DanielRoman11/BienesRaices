import Sequelize from "sequelize";
import { manejarDesconexion } from "../helpers/manejaDesconexion.js";

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  dialect: 'mysql',
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

await db.authenticate()
  .then(()=>{
    console.log("Conexión establecida");
  })
  .catch((err) =>{
    console.error("Hubo un error en la conexión a la base de datos", err);
  })

manejarDesconexion(db)

export default db;
