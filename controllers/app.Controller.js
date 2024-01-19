import { Categoria, Precio, Propiedad } from "../models/index.js"

export const home = async(req,res) => {
  const [ categorias, precios, casas ] = await Promise.all([
    Categoria.findAll({raw: true}),
    Precio.findAll({raw: true}),
    Propiedad.findAll({
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
    })
  ])

  res.render('home', {
    pagina: "Home",
    categorias,
    precios,
    casas
  })
 
 
  res.render('home', {
    pagina: "Inicio"
  })
}

export const categoria = async(req,res) => {

}

export const noEncontrado = (req, res) => {

}

export const buscador = (req, res) =>{

}