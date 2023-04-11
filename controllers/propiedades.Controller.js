const admin = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis propiedades",
    barra: true
  });
}

const crear = (req, res) => {
  res.render("propiedades/crear", {
    pagina: "Ingresar una nueva propiedad",
    barra: true,
  });
}

export {
  admin,
  crear
}