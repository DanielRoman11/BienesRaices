import { DataTypes } from "sequelize"
import bcrypt from "bcrypt";
import db from '../config/dbs.js'

const Usuario = db.define('usuarios', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: DataTypes.STRING,
  confirmado: DataTypes.BOOLEAN
}, {
  hooks: {
    beforeCreate: async function(usuario) {
      await bcrypt.genSalt(10)
        .then(async (salt) => {
          usuario.password = await bcrypt.hash(usuario.password, salt);
        }).catch((err) => {
          console.error("Hubo un error al hashear la password! ", err);
        });
    }
  },
  scopes: { //? Elimina ciertos campos cuando se consulta a un objeto 'Usuario'
    eliminarPassword: {
      attributes: {
        exclude: ["password", "token", "createdAt", "updatedAt"]
      }
    }
  }
});

// * Métodos personalizados
//Comprobar un password
Usuario.prototype.verficarPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

export default Usuario;