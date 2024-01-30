import { Categoria, Precio, Propiedad } from "../models/index.js"

export const home = async(req,res) => {
  const [ categorias, precios, casas, apartamentos ] = await Promise.all([
    Categoria.findAll({raw: true}),
    Precio.findAll({raw: true}),
    Propiedad.findAll({
      limit: 3,
      include:[{
        model: Precio,
        as: 'precio'
      }],
      where: {
        categoriaID: 1
      },
      order: [
        ['createdAt', 'DESC']
      ]
    }),
    Propiedad.findAll({
      limit: 3,
      include:[{
        model: Precio,
        as: 'precio'
      }],
      where: {
        categoriaID: 2
      },
      order: [
        ['createdAt', 'DESC']
      ]
    }),

  ])

  res.render('home', {
    pagina: "Home",
    categorias,
    precios,
    casas,
    apartamentos,
    
  })
 
 
  res.render('home', {
    pagina: "Inicio"
  })
}

export const categoria = async(req,res) => {
  const { id } = req.params;
  
  const categoria = await Categoria.findByPk(id);
  if(!categoria) return res.redirect('/404');

  const propiedades = await Propiedad.findAll({
    where: {
      categoriaID: id
    },
    include: [{
      model: Precio, as: 'precio'
    }]
  })

  res.render('categoria', {
    pagina: categoria.nombre+"s en venta",
    propiedades
  })


}

export const noEncontrado = (req, res) => {
  res.render('404', {
    pagina: "No encontrada"
  })
}

export const buscador = (req, res) =>{

}