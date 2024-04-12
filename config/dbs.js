import Sequelize from "sequelize";

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  dialect: 'mysql',
  define: {
    timestamps: true
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 60000,
    idle: 10000
  },
  operatorAliases: false,
});

export default db;