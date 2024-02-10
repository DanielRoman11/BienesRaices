import { Categoria, Imagen, Precio, Propiedad } from "../models/index.js"
import { Op, Sequelize } from "sequelize";

export const home = async(req,res) => {
  const [ categorias, precios, casas, apartamentos ] = await Promise.all([
    Categoria.findAll({raw: true}),
    Precio.findAll({raw: true}),
    Propiedad.findAll({
      limit: 3,
      include:[
        { model: Precio, as: 'precio' },
        { model: Imagen, required: false, where: { propiedadID: Sequelize.col('propiedades.id')} }
      ],
      where: {
        categoriaID: 1
      },
      order: [
        ['createdAt', 'DESC']
      ]
    }),
    Propiedad.findAll({
      limit: 3,
      include:[
        { model: Precio, as: 'precio' },
        { model: Imagen, required: false, where: { propiedadID: Sequelize.col('propiedades.id')} }
      ],
      where: {
        categoriaID: 2
      },
      order: [
        ['createdAt', 'DESC']
      ]
    }),

  ])

  const usuario = req.usuario;

  res.render('home', {
    pagina: "Home",
    categorias,
    precios,
    casas,
    apartamentos,
    usuario
  })
 
 
  res.render('home', {
    pagina: "Inicio"
  })
}

export const categoria = async(req,res) => {
  const { id } = req.params;
  const usuario = req.usuario;
  
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
    propiedades,
    usuario
  })


}

export const noEncontrado = (req, res) => {
  req.usuario = usuario;

  res.render('404', {
    pagina: "No encontrada",
    usuario
  })

}

export const buscador = async(req, res) =>{
  const { termino } = req.body;
  const usuario = req.usuario;

  if(!termino.trim()){
    return res.redirect('back');
  }

  const propiedades = await Propiedad.findAll({
    where: {
      titulo: {
        [Op.like] : "%"+termino+"%"
      }
    },
    include: [{
      model: Precio, as: 'precio'
    },{model: Categoria, as: 'categoria'}]
  })

  console.log(propiedades);

  res.render('busqueda', {
    pagina: 'Resultado Busqueda',
    propiedades,
    usuario
  })
}