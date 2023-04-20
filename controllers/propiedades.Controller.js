import Categoria from "../models/Categoria.js"
import Precio from "../models/Precio.js"

const admin = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis propiedades",
    barra: true
  });
}

const crear = async(req, res) => {
  const [ categorias, precios ] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ]);

  res.render("propiedades/crear", {
    pagina: "Ingresar una nueva propiedad",
    barra: true,
    categorias,
    precios,
    csrfToken: req.csrfToken()
  });
}

export {
  admin,
  crear
}