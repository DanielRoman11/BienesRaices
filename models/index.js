import Propiedad from "./Propiedad.js"
import Categoria from "./Categoria.js";
import Precio from "./Precio.js";
import Usuario from "./Usuario.js";
import Mensaje from "./Mensaje.js";


Propiedad.belongsTo(Categoria, { foreignKey: "categoriaID" });
Propiedad.belongsTo(Precio, { foreignKey: "precioID" });
Propiedad.belongsTo(Usuario, { foreignKey: "usuarioID" });

Mensaje.belongsTo(Propiedad, { foreignKey: 'propiedadID' });
Mensaje.belongsTo(Usuario, { foreignKey: 'usuarioID' });

export {
  Propiedad, 
  Precio, 
  Categoria, 
  Usuario,
  Mensaje
}