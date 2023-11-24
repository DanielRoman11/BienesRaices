import { Categoria, Precio } from "../models/index.js"

export const home = async(req,res) => {
  const [categorias, precios] = await Promise.all([
    Categoria.findAll({raw: true}),
    Precio.findAll({raw: true})
  ])

  res.render('home', {
    pagina: "Home",
    categorias,
    precios
  })
 
 
  res.render('home', {
    pagina: "Inicio"
  })
}

export const categoria = async(req,res) => {

}

export const notEncontrado = (req, res) => {

}

export const buscador = (req, res) =>{

}