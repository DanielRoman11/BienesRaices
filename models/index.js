import Propiedad from "./Propiedad.js"
import Categoria from "./Categoria.js";
import Precio from "./Precio.js";
import Usuario from "./Usuario.js";
import Imagen from "./Imagenes.js";


Propiedad.belongsTo(Categoria, { foreignKey: "categoriaID" });
Propiedad.belongsTo(Precio, { foreignKey: "precioID" });
Propiedad.belongsTo(Usuario, { foreignKey: "usuarioID" });
Propiedad.hasMany(Imagen, {foreignKey: "propiedadID" });
Imagen.belongsTo(Propiedad, {foreignKey: "propiedadID" });

export {
  Propiedad, 
  Precio, 
  Categoria, 
  Usuario
}